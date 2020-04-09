import React from 'react';
import { compose } from 'recompose';

import withAuthUser from '../src/services/pageWrappers/withAuthUser';
import withAuthUserInfo from '../src/services/pageWrappers/withAuthUserInfo';
import withAuthorization from '../src/services/pageWrappers/withAuthorization';

import Account from '../src/components/Pages/Account';

const condition = (authUser: any) => {
  return !!authUser;
}
const AccountPage = (props: any) => {
  return (
    <Account {...props}/>
  )
};

export default compose(
  withAuthUser,
  withAuthUserInfo,
  withAuthorization(condition),
)(AccountPage);

