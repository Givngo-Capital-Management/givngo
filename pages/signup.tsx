import React from 'react';

import withAuthUser from '../src/services/pageWrappers/withAuthUser';
import withAuthUserInfo from '../src/services/pageWrappers/withAuthUserInfo';

import SignUpForm from '../src/components/SignUp/SignUp'

const SignUp = (props: any) => {
  return (
    <SignUpForm {...props}/>
  )
};

export default withAuthUser(withAuthUserInfo(SignUp));