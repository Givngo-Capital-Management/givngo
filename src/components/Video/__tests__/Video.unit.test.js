import React from 'react';
import { shallow } from 'enzyme';
import Video from '../Video';

test('renders video component correctly', () => {
  const wrapper = shallow(<Video id="12345" />);
  expect(wrapper).toMatchSnapshot();
});

test('renders null if id in video component not specified', () => {
  const wrapper = shallow(<Video />);
  expect(wrapper).toMatchSnapshot();
});
