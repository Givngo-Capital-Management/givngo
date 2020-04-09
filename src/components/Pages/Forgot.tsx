import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import AppLayout from '../AppLayout';

import firebase from 'firebase/app';
import 'firebase/auth';

const ForgotPasswordForm = (props: any) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = (event: any, data: any) => {
    firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmail('')
      })
      .catch(error => {
        setError(error.message);
      });
    event.preventDefault();
  };

  const isInvalid = email === '';

  return (
    <AppLayout>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='orange' textAlign='center'>
            <Image src='/assets/logo.png' /> Forgot your password?
          </Header>
          <Form size='large' onSubmit={onSubmit}>
            <Segment>
              <Form.Input
                fluid icon='user' 
                iconPosition='left' 
                placeholder='E-mail address'
                onChange={(event) => setEmail(event.target.value)}
              />
              {error && <p>{error}</p>}
              <Button type='submit' color='orange' fluid size='large' disabled={isInvalid}>
                Reset
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/signup'>Sign Up</a>
          </Message>
          <Message>
            Already have an account? <a href='/signin'>Sign In</a>
          </Message>
        </Grid.Column>
      </Grid>
    </AppLayout>
  )
};

export default ForgotPasswordForm;