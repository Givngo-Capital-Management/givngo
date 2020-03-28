import React from 'react';
import { shallow } from 'enzyme';
import Charity from '../../pages/charity';

describe('Charity', () => {
  test('renders', () => {
    const wrapper = shallow(<Charity />);
    expect(wrapper).toMatchSnapshot();
  });
});
