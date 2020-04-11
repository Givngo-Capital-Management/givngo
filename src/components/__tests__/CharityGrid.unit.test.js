import React from 'react';
import { shallow } from 'enzyme';
import CharityGrid from '../Home/CharityGrid';

describe('CharityGrid', () => {
  test('renders with title prop', () => {
    const wrapper = shallow(<CharityGrid title="Trending" charities={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders without divider', () => {
    const wrapper = shallow(<CharityGrid hideDivider charities={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
