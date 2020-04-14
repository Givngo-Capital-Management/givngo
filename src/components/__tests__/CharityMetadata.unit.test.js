import React from 'react';
import { shallow } from 'enzyme';
import CharityMetadata from '../Charity/CharityMetadata';

describe('CharityMetadata', () => {
  test('renders', () => {
    const wrapper = shallow(<CharityMetadata charity={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
