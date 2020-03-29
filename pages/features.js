import React from 'react';
import FeatureHeaderSection from '../components/Features/FeatureHeaderSection';
import FeatureTwoImage from '../components/Features/FeatureTwoImage';
import FeatureVideoText from '../components/Features/FeatureVideoText';
import FeatureFormSection from '../components/Features/FeatureFormSection';
import AppLayout from '../components/AppLayout';

export default function Features() {
  const images = [
    'https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII.png',
    'https://givngo.io/wp-content/themes/givngo/images/2305-6-Eblast-One-Tree-Planted-One-Tree-Planted-2.jpg',
  ];
  const image1 = [
    'https://givngo.io/wp-content/themes/givngo/images/No-Color-Present-Tense.jpg',
    'https://givngo.io/wp-content/themes/givngo/images/Screen-Shot-2019-11-15-at-11.22.20.png',
  ];
  return (
    <AppLayout>
      <FeatureHeaderSection />
      <FeatureTwoImage
        urls={images}
        position="right"
        srcset_param="https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII-p-500.png 500w, https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII-p-800.png 800w, https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII-p-1080.png 1080w, https://givngo.io/wp-content/themes/givngo/images/OOOTTTIIIIII.png 2560w"
      />
      <FeatureVideoText />
      <FeatureTwoImage
        urls={image1}
        position="left"
        srcset_param="https://givngo.io/wp-content/themes/givngo/images/No-Color-Present-Tense-p-500.jpeg 500w, https://givngo.io/wp-content/themes/givngo/images/No-Color-Present-Tense.jpg 851w"
      />
      <FeatureFormSection />
    </AppLayout>
  );
}
