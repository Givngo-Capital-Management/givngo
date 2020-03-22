import React from 'react';
import { shallow } from 'enzyme';
import RelatedCharities from '../RelatedCharities';

describe('RelatedCharities', () => {
  test('renders', () => {
    const wrapper = shallow(<RelatedCharities />);
    expect(wrapper).toMatchSnapshot();
  });
});
