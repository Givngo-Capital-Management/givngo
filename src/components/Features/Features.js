import React from 'react';
import './Features.scss'
import FeatureHeaderSection from '../FeatureHeaderSection/Featureheadersection'
import FeatureTwoImage from '../FeatureTwoImage/FeatureTwoImage'
import FeatureVideoText from '../FeatureVideoText/FeatureVideoText'

export default function Features(){
  return ( 
    <body class="body">  
      <FeatureHeaderSection className="feature-header" />  
      <FeatureTwoImage className="feature-two-image" />
      <FeatureVideoText className="video-player-section" />
    </body>
  );
}