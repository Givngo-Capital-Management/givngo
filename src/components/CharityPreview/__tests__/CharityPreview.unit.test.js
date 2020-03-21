import React from 'react';
import { shallow } from 'enzyme';
import CharityPreview from '../CharityPreview';

describe('CharityPreview', () => {
  test('renders', () => {
    const wrapper = shallow(<CharityPreview />);
    expect(wrapper).toMatchSnapshot();
  });
});
