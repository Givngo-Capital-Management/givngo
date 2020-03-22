import React from 'react';
import { shallow } from 'enzyme';
import CharityPreview from '../CharityPreview';

describe('CharityPreview', () => {
  test('renders vertically', () => {
    const wrapper = shallow(<CharityPreview />);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders horizontally', () => {
    const wrapper = shallow(<CharityPreview horizontal />);
    expect(wrapper).toMatchSnapshot();
  });
});
