import React from 'react';
import { shallow } from 'enzyme';
import HeaderNav from '../HeaderNav';

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn(() => ({
      currentUser: ""
    }))
  }
});

test('renders HeaderNav', () => {
  const wrapper = shallow(<HeaderNav />);
  expect(wrapper).toMatchSnapshot();
});
