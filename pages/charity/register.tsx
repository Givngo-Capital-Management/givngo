import React from 'react';
import { compose } from 'recompose';

import RegisterCharity from '../../src/components/Pages/Charity/RegisterCharity';

import withAuthUser from '../../src/services/pageWrappers/withAuthUser';
import withAuthUserInfo from '../../src/services/pageWrappers/withAuthUserInfo';
import withAuthorization from '../../src/services/pageWrappers/withAuthorization';

const condition = (authUser: any) => {
  return !!authUser && "ADMIN" in authUser.roles;
}
const RegisterCharityPage = (props: any) => {
  return (
    <RegisterCharity {...props}/>
  );
};

export default compose(
  withAuthUser,
  withAuthUserInfo,
  withAuthorization(condition),
)(RegisterCharityPage);