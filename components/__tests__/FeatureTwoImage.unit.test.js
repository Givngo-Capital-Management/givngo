import React from 'react';
import { shallow } from 'enzyme';
import FeatureTwoImage from '../Features/FeatureTwoImage';

const images = [
  'https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII.png',
  'https://givngo.io/wp-content/themes/givngo/images/2305-6-Eblast-One-Tree-Planted-One-Tree-Planted-2.jpg',
];

const srcsetParam =
  'https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII-p-500.png 500w, https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII-p-800.png 800w, https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII-p-1080.png 1080w, https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII.png 2560w';

describe('FeatureTwoImage', () => {
  test('render without props', () => {
    const wrapper = shallow(<FeatureTwoImage />);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders on left', () => {
    const wrapper = shallow(
      <FeatureTwoImage
        urls={images}
        position="left"
        srcsetParam={srcsetParam}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('renders on right', () => {
    const wrapper = shallow(
      <FeatureTwoImage
        urls={images}
        position="right"
        srcsetParam={srcsetParam}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
