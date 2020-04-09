import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Card } from 'semantic-ui-react';
import get from 'lodash/get';

import AppLayout from '../AppLayout';

import 'firebase/auth';

const Admin = (props: any) => {
  return (
    <AppLayout>
        <Grid>
          <Grid.Column>
            <Container>
              <Header textAlign='center' as='h2' color='orange'>
                Admin
              </Header>
            </Container>
          </Grid.Column>
        </Grid>
    </AppLayout>
  )
};

export default Admin;