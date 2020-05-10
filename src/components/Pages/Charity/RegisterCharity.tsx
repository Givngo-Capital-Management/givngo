import React, { useState, FormEvent } from 'react';
import { Button, Form, Grid, Header, Icon, Image, Message, Segment, FormProps, InputOnChangeData } from 'semantic-ui-react';
import AppLayout from '../../AppLayout';
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import get from 'lodash/get';

import {fetchVideo} from '../../../services/vimeo/api';

const RegisterCharityForm = (props: any) => {
  const { AuthUserInfo, data } = props;
  const AuthUser = get(AuthUserInfo, 'AuthUser', null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [donationUrl, setDonationUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [categories, setCategories] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState<null | string>(null);

  const isInvalidSignup = name === ''
    || description === ''
    || logo === ''
    || donationUrl === ''
    || videoId === ''
    || categories === '';

  const resetForm = () => {
    setName('')
    setDescription('')
    setLogo('')
    setDonationUrl('')
    setVideoId('')
    setCategories('')
  }

  const onSubmit = (event: FormEvent, data: FormProps) => {
    fetchVideo(videoId)
      .then((response: any) => {      
        var newCharity = firebase.database().ref('/charities').push()

        newCharity.set({
          name,
          description,
          logo,
          donationUrl,
          categories: { name: categories },
          ...response
        })

        setSuccess(`Successfully registered ${name}`)
        resetForm();
      })
      .catch(error => {
        setError(error)
      })
    
    event.preventDefault();
  };

  return (
    <AppLayout>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='orange' textAlign='center'>
            <Image src='/assets/logo.png' /> Register Charity
          </Header>
          <Form size='large' onSubmit={onSubmit}>
            <Segment>
              <Form.Input
                placeholder='Name'
                onChange={(event) => setName(event.target.value)}
              />
              <Form.Input
                placeholder='Description'
                onChange={(event) => setDescription(event.target.value)}
              />
              <Form.Input
                placeholder='Logo'
                onChange={(event) => setLogo(event.target.value)}
              />
              <Form.Input
                placeholder='Donation URL'
                onChange={(event) => setDonationUrl(event.target.value)}
              />
              <Form.Input
                placeholder='Video ID'
                onChange={(event) => setVideoId(event.target.value)}
              />
              <Form.Input
                placeholder='Categories'
                onChange={(event) => setCategories(event.target.value)}
              />
              {error && <p>{error}</p>}
              {success && <Message positive>{success}</Message>}
              <Button type='submit' color='orange' fluid size='large' disabled={isInvalidSignup}>
                Register
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </AppLayout>
  )
};

export default RegisterCharityForm;