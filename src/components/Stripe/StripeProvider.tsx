import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

type Props = {
  title?: string;
};

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!);

const StripeProvider: React.FunctionComponent<Props> = ({
  children,
  title = 'Donate'
})  => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);

export default StripeProvider;