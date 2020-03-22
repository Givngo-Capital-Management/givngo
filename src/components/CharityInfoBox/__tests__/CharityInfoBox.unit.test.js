import React from 'react';
import { shallow } from 'enzyme';
import CharityInfoBox from '../CharityInfoBox';

describe('CharityInfoBox', () => {
  test('renders', () => {
    const wrapper = shallow(<CharityInfoBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
