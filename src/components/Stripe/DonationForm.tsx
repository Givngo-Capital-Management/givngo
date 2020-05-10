import React, { useState } from 'react';

import stripeApi from '../../services/stripe/api';
import { formatAmountForDisplay } from '../../services/stripe/helper';
import * as config from '../../config';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form, Button, ButtonGroup, Input, Divider, Message, Label } from 'semantic-ui-react';

const CARD_OPTIONS = {
  iconStyle: 'solid' as const,
  style: {
    base: {
      iconColor: '#6772e5',
      color: '#6772e5',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#6772e5',
      },
    },
    invalid: {
      iconColor: '#ef2961',
      color: '#ef2961',
    },
  },
};

const DonationForm = (props: any) => {
  const { charity } = props;
  const [input, setInput] = useState({
    customDonation: 20,
    cardholderName: '',
  });
  const [payment, setPayment] = useState({ status: 'initial' });
  const [errorMessage, setErrorMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const PaymentStatus = ({ status }: { status: string }) => {
    switch (status) {
      case 'processing':
      case 'requires_payment_method':
      case 'requires_confirmation':
        return <h2>Processing...</h2>;

      case 'requires_action':
        return <h2>Authenticating...</h2>;
      
      case 'succeeded':
        return <h2>Payment Suceeded 🥳</h2>;

      case 'error':
        return (
          <>
            <h2>Error 😭</h2>
            <p>{errorMessage}</p>
          </>
        );
      
        default:
          return null;
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSetAmountChange = (amount: number) => {
    setInput({
      ...input,
      customDonation: amount,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    // Abort if form isn't valid
    if (!e.currentTarget.reportValidity()) return;
    
    setPayment({ status: 'processing' });

    // Create a PaymentIntent with the specified amount
    const response = await stripeApi.createPaymentIntent({
      amount: input.customDonation,
      charity_id: charity.id
    });
    setPayment(response);

    if (response.statusCode === 500) {
      setPayment({ status: 'error' });
      setErrorMessage(response.message);
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element
    const cardElement = elements!.getElement(CardElement);

    // Use CardElement with other Stripe.js APIs
    const { error, paymentIntent } = await stripe!.confirmCardPayment(
      response.client_secret,
      {
        payment_method: {
          card: cardElement!,
          billing_details: { name: input.cardholderName },
        },
      }
    );

    if (error) {
      setPayment({ status: 'error' });
      setErrorMessage(error.message ?? 'An unknown error occured');
    } else if (paymentIntent) {
      console.log('payment intent', paymentIntent)
      setPayment(paymentIntent);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>{`Custom donation amount (${formatAmountForDisplay(config.MIN_AMOUNT, config.CURRENCY)}-${formatAmountForDisplay(config.MAX_AMOUNT, config.CURRENCY)}):`}</label>
          <Input 
            name="customDonation"
            placeholder='$10.00' 
            type='number' 
            onChange={handleInputChange} 
            value={input.customDonation}
          />
        </Form.Field>
        <Label onClick={() => handleSetAmountChange(5)}>
          {formatAmountForDisplay(5, config.CURRENCY)}
        </Label>
        <Label onClick={() => handleSetAmountChange(10)}>
          {formatAmountForDisplay(10, config.CURRENCY)}
        </Label>
        <Label onClick={() => handleSetAmountChange(20)}>
          {formatAmountForDisplay(20, config.CURRENCY)}
        </Label>
        <Label onClick={() => handleSetAmountChange(50)}>
          {formatAmountForDisplay(50, config.CURRENCY)}
        </Label>
        <Label onClick={() => handleSetAmountChange(100)}>
          {formatAmountForDisplay(100, config.CURRENCY)}
        </Label>
        <Divider hidden />
        <Form.Field required>
          <label>Name</label>
          <Input
            name="cardholderName"
            placeholder='Jane Doe' 
            type='text' 
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <Input
            name="cardholderEmail"
            placeholder='janedoe@gmail.com' 
            type='text'
          />
        </Form.Field>
        <Form.Field required>
          <label>Card details</label>
          <div style={{border: '1px solid rgba(34, 36, 38, 0.15)', borderRadius: '4px', padding: '10px'}}>
            <CardElement
              options={CARD_OPTIONS}
              onChange={e => {
                if (e.error) {
                  setPayment({ status: 'error' })
                  setErrorMessage(e.error.message ?? 'An unknown error occured')
                }
              }}
            />
          </div>
        </Form.Field>
        <Divider hidden />
        <Button
          type="submit"
          disabled={
            !['initial', 'succeeded', 'error'].includes(payment.status) ||
            !stripe
          }>
          Donate {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
        </Button>
        <PaymentStatus status={payment.status} />
      </Form>
    </>
  )
};

export default DonationForm;