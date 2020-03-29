import React from 'react';
import { shallow } from 'enzyme';
import FeatureHeaderSection from '../Features/FeatureHeaderSection';

describe('FeatureHeaderSection', () => {
  test('renders', () => {
    const wrapper = shallow(<FeatureHeaderSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
