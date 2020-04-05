import React from 'react';

import { get } from 'lodash/object'

import CharityGrid from '../src/components/Home/CharityGrid';
import AppLayout from '../src/components/AppLayout';

import withAuthUser from '../src/services/pageWrappers/withAuthUser';
import withAuthUserInfo from '../src/services/pageWrappers/withAuthUserInfo';

const styles = {
  homeContainer: {
    marginTop: '64px',
    display: 'grid',
    grid: 'auto / auto',
    justifyContent: 'center',
  },
};

const Index = (props) => {
  const { AuthUserInfo, data } = props;
  const AuthUser = get(AuthUserInfo, 'AuthUser', null);

  return (
    <AppLayout>
      <div style={styles.homeContainer}>
        <CharityGrid title="Chilren's charities" />
        <CharityGrid title="Food Sustainability and Insecurity" hideDivider />
      </div>
    </AppLayout>
  );
};

// Use `withAuthUser` to get the authed user server-side, which
// disables static rendering.
// Use `withAuthUserInfo` to include the authed user as a prop
// to your component.
export default withAuthUser(withAuthUserInfo(Index))
