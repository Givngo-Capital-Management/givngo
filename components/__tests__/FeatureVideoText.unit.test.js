import React from 'react';
import { shallow } from 'enzyme';
import FeatureVideoText from '../Features/FeatureVideoText';

describe('FeatureVideoText', () => {
  test('renders', () => {
    const wrapper = shallow(<FeatureVideoText />);
    expect(wrapper).toMatchSnapshot();
  });
});
