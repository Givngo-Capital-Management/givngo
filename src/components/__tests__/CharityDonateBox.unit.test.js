import React from 'react';
import { shallow } from 'enzyme';
import CharityDonateBox from '../Charity/CharityDonateBox';

describe('CharityDonateBox', () => {
  test('renders', () => {
    const wrapper = shallow(<CharityDonateBox charity={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
