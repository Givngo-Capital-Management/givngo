import React from 'react';

import withAuthUser from '../src/services/pageWrappers/withAuthUser';
import withAuthUserInfo from '../src/services/pageWrappers/withAuthUserInfo';

import SignInForm from '../src/components/Pages/SignIn';

const SignIn = (props: any) => {
  return (
    <SignInForm {...props}/>
  )
};

export default withAuthUser(withAuthUserInfo(SignIn));