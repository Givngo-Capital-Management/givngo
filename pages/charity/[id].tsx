import React from 'react';

import Charity from '../../src/components/Pages/Charity';

import withAuthUser from '../../src/services/pageWrappers/withAuthUser';
import withAuthUserInfo from '../../src/services/pageWrappers/withAuthUserInfo';

const CharityPage = (props: any) => {
  return (
    <Charity {...props}/>
  );
};

export default withAuthUser(withAuthUserInfo(CharityPage))