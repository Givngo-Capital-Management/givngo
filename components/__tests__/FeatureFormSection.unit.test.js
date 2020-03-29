import React from 'react';
import { shallow } from 'enzyme';
import FeatureFormSection from '../Features/FeatureFormSection';

describe('FeatureFormSection', () => {
  test('renders', () => {
    const wrapper = shallow(<FeatureFormSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
