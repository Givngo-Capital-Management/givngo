import React from 'react';
import { shallow } from 'enzyme';
import CharityGridHeader from '../Home/CharityGridHeader';

describe('CharityGridHeader', () => {
  test('renders without props', () => {
    const wrapper = shallow(<CharityGridHeader />);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders with empty string header', () => {
    const wrapper = shallow(<CharityGridHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders with title', () => {
    const wrapper = shallow(<CharityGridHeader title="Children's charities" />);
    expect(wrapper).toMatchSnapshot();
  });
});
