import React from 'react';

import withAuthUser from '../src/services/pageWrappers/withAuthUser';
import withAuthUserInfo from '../src/services/pageWrappers/withAuthUserInfo';

import ForgotForm from '../src/components/Forgot/Forgot';

const Forgot = (props: any) => {
  return (
    <ForgotForm {...props}/>
  )
};

export default withAuthUser(withAuthUserInfo(Forgot));