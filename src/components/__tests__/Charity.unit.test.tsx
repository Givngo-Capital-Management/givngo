import React from 'react';
import { shallow } from 'enzyme';
import Charity from '../../../pages/charity';

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn(() => ({
      currentUser: ""
    })),
    apps: [],
    initializeApp: jest.fn()
  }
});

describe('Charity', () => {
  test('renders', () => {
    const wrapper = shallow(<Charity AuthUserInfo={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
