import React from 'react';
import Video from '../../components/Video/Video';
import RelatedCharities from '../../components/RelatedCharities/RelatedCharities';
import './Charity.scss';
import CharityMetadata from '../../components/CharityMetadata/CharityMetadata';
import CharityInfoBox from '../../components/CharityInfoBox/CharityInfoBox';

export default function Charity() {
  return (
    <div className="charity-detail-grid">
      <Video className="video" id="396392696" title="breast friends" />
      <CharityMetadata className="metadata" />
      <CharityInfoBox className="charity-info-box" />
      <RelatedCharities className="related-charities" />
    </div>
  );
}
