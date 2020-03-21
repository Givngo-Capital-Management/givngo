import React from 'react';
import { shallow } from 'enzyme';
import CharityGrid from '../CharityGrid';

describe('CharityGrid', () => {
  test('renders without props', () => {
    const wrapper = shallow(<CharityGrid />);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders with title prop', () => {
    const wrapper = shallow(<CharityGrid title="Trending" />);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders without divider', () => {
    const wrapper = shallow(<CharityGrid hideDivider />);
    expect(wrapper).toMatchSnapshot();
  });
});
