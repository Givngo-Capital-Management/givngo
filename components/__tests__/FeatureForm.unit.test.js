import React from 'react';
import { shallow } from 'enzyme';
import FeatureForm from '../Features/FeatureForm';

describe('FeatureForm', () => {
  test('renders', () => {
    const wrapper = shallow(<FeatureForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
