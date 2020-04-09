import React from 'react';
import { compose } from 'recompose';

import withAuthUser from '../src/services/pageWrappers/withAuthUser';
import withAuthUserInfo from '../src/services/pageWrappers/withAuthUserInfo';
import withAuthorization from '../src/services/pageWrappers/withAuthorization';

import Admin from '../src/components/Pages/Admin';

const condition = (authUser: any) => {
  return !!authUser && "ADMIN" in authUser.roles;
}
const AdminPage = (props: any) => {
  return (
    <Admin {...props}/>
  )
};

export default compose(
  withAuthUser,
  withAuthUserInfo,
  withAuthorization(condition),
)(AdminPage);