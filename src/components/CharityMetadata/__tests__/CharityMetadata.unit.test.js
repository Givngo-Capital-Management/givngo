import React from 'react';
import { shallow } from 'enzyme';
import CharityMetadata from '../CharityMetadata';

describe('CharityMetadata', () => {
  test('renders', () => {
    const wrapper = shallow(<CharityMetadata />);
    expect(wrapper).toMatchSnapshot();
  });
});
