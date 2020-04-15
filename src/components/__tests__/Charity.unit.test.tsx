import React from 'react';
import { shallow } from 'enzyme';
import Charity from '../Pages/Charity/Charity';
import router from 'next/router';

jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "/",
          pathname: "",
          query: "",
          asPath: "",
      };
  },
}));

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
