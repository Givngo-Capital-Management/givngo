import React, { useState } from 'react';
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import AppLayout from '../AppLayout';

import firebase from 'firebase/app';
import 'firebase/auth';

const SignInForm = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const isInvalidSignIn = password === ''|| email === '';

  const onSubmit = (event: any, data: any) => {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push("/");
      })
      .catch(error => {
        setError(error.message)
      })
    event.preventDefault();
  };

  return (
    <AppLayout>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='orange' textAlign='center'>
            <Image src='/assets/logo.png' /> Sign in to Givngo
          </Header>
          <Form size='large' onSubmit={onSubmit}>
            <Segment>
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='E-mail address'
                onChange={(event) => setEmail(event.target.value)}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={(event) => setPassword(event.target.value)}
              />
              {error && <p>{error}</p>}
              <Button type='submit' color='orange' fluid size='large' disabled={isInvalidSignIn}>
                Sign In
              </Button>
              <Button color='google plus' fluid size='large' style={{marginTop: 8}}>
                <Icon name='google' /> Sign in with Google
              </Button>
              <Button color='facebook' fluid size='large' style={{marginTop: 8}}>
                <Icon name='facebook' /> Sign in with Facebook
              </Button>
            </Segment>
          </Form>
          <Message>
            New with us? <a href='/signup'>Sign Up</a>
          </Message>
          <Message>
            Forgot your password? <a href='/forgot'>Reset Password</a>
          </Message>
        </Grid.Column>
      </Grid>
    </AppLayout>
  )
};

export default SignInForm;