import React, { useState, FormEvent } from 'react';
import { Button, Form, Grid, Header, Icon, Image, Message, Segment, FormProps, InputOnChangeData } from 'semantic-ui-react';
import AppLayout from '../AppLayout';
import { useRouter } from 'next/router';
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import get from 'lodash/get';

const SignUpForm = (props: any) => {
  const { AuthUserInfo, data } = props;
  const AuthUser = get(AuthUserInfo, 'AuthUser', null);

  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const [authUser, setAuthUser] = useState<firebase.auth.UserCredential | null>(null);
  const router = useRouter();

  const isInvalidSignup = password1 !== password2
    || password1 === ''
    || email === '';

  const onSubmit = (event: FormEvent, data: FormProps) => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password1)
      .then(authed => {
        setAuthUser(authed);
        return firebase.database()
          .ref(`users/${authed?.user?.uid}`)
          .set({
            email,
            roles: {},
          });
      })
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
            <Image src='/assets/logo.png' /> Sign up for an account
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
                onChange={(event) => setPassword1(event.target.value)}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Re-enter Password'
                type='password'
                onChange={(event) => setPassword2(event.target.value)}
              />
              {error && <p>{error}</p>}
              <Button type='submit' color='orange' fluid size='large' disabled={isInvalidSignup}>
                Sign Up
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
            Already have an account? <a href='/signin'>Sign In</a>
          </Message>
        </Grid.Column>
      </Grid>
    </AppLayout>
  )
};

export default SignUpForm;