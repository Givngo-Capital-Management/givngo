import { buffer } from 'micro';
import Cors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';

import Stripe from 'stripe';

import firebase from 'firebase/app';
import 'firebase/database';
import initFirebase from '../../../src/services/auth/initFirebase';

initFirebase();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-03-02',
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature']!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
    } catch (err) {
      // On error, log and return the error message.
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event.
    console.log('✅ Success:', event.id);

    // Cast event data to Stripe object.
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`💰 PaymentIntent status: ${paymentIntent.status}`);
    } else if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(
        `❌ Payment failed: ${paymentIntent.last_payment_error?.message}`
      );
    } else if (event.type === 'charge.succeeded') {
      const charge = event.data.object as Stripe.Charge;
      console.log(`💵 Charge id: ${charge.id}`);

      console.log(`💵 Creating transaction ${charge.id} for charity ${charge.metadata.charity}`);
      console.log('Firebase', firebase.database().ref(`/transactions/${charge.metadata.charity}/${charge.id}`));
      firebase.database().ref(`/transactions/${charge.metadata.charity}/${charge.id}`).set({
        created: charge.created,
        amount: charge.amount,
        billing_details: charge.billing_details,
        currency: charge.currency,
        customer: charge.customer,
        description: charge.description,
        receipt_url: charge.receipt_url
      }, (error) => {
        if (error) {
          console.log(`🔥❌ firebase error: ${error}`)
        } else {
          console.log(`🔥✅ firebase success: charge saved successfully`)
        }
      });
      firebase.database().ref(`/charities/${charge.metadata.charity}`).transaction((charity) => {
        if (charity) {
          if (charity.total_raised) {
            charity.total_raised += charge.amount;
          } else {
            charity.total_raised = charge.amount;
          }
        }
        return charity;
      }, (error) => {
        if (error) {
          console.log(`🔥❌ firebase transaction error: ${error}`)
        } else {
          console.log(`🔥✅ firebase transaction success`)
        }
      });
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

export default cors(webhookHandler as any);