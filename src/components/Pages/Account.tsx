import React, { useState } from 'react';
import { Grid, Header, Container } from 'semantic-ui-react';
import get from 'lodash/get';

import AppLayout from '../AppLayout';

const Account = (props: any) => {
  const { AuthUserInfo, data } = props;
  const AuthUser = get(AuthUserInfo, 'AuthUser', null);

  return (
    <AppLayout>
        <Grid>
          <Grid.Column>
            <Container>
              <Header textAlign='center' as='h2' color='orange'>
                Welcome, {AuthUser.email}
              </Header>
            </Container>
          </Grid.Column>
        </Grid>
    </AppLayout>
  )
};

export default Account;