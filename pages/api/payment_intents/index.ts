import { NextApiRequest, NextApiResponse } from 'next';

import { CURRENCY, MIN_AMOUNT, MAX_AMOUNT } from '../../../src/config';
import { formatAmountForStripe } from '../../../src/services/stripe/helper';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-03-02',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { amount, charity_id }: { amount: number, charity_id: string } = req.body;
    try {
      // Validate the amount that was passed from the client
      if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
        throw new Error('Invalid amount.');
      }

      // Create PaymentIntent from body params
      const params: Stripe.PaymentIntentCreateParams = {
        payment_method_types: ['card'],
        amount: formatAmountForStripe(amount, CURRENCY),
        currency: CURRENCY,
        metadata: { charity: charity_id }
      };

      const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create(
        params
      );
      
      res.status(200).json(paymentIntent);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}