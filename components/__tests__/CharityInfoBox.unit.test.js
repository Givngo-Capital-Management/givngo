import React from 'react';
import { shallow } from 'enzyme';
import CharityInfoBox from '../Charity/CharityInfoBox';

describe('CharityInfoBox', () => {
  test('renders', () => {
    const wrapper = shallow(<CharityInfoBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
