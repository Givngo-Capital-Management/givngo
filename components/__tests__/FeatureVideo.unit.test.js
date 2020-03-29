import React from 'react';
import { shallow } from 'enzyme';
import FeatureVideo from '../Features/FeatureVideo';

describe('FeatureVideo', () => {
  test('renders without props', () => {
    const wrapper = shallow(<FeatureVideo />);
    expect(wrapper).toMatchSnapshot();
  });
  test('render with props', () => {
    const wrapper = shallow(
      <FeatureVideo id="2F371994595" title="Save the Children, Who We Are" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
