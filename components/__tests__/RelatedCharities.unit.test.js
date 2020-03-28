import React from 'react';
import { shallow } from 'enzyme';
import RelatedCharities from '../Charity/RelatedCharities';

describe('RelatedCharities', () => {
  test('renders', () => {
    const wrapper = shallow(<RelatedCharities />);
    expect(wrapper).toMatchSnapshot();
  });
});
