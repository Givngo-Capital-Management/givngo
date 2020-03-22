import React from 'react';
import Video from '../../components/Video/Video';
import RelatedCharities from '../../components/RelatedCharities/RelatedCharities';
import CharityMetadata from '../../components/CharityMetadata/CharityMetadata';
import CharityInfoBox from '../../components/CharityInfoBox/CharityInfoBox';
import CharityDonateBox from '../../components/CharityDonateBox/CharityDonateBox';
import './Charity.scss';

export default function Charity() {
  return (
    <div className="charity-detail">
      <Video className="video" id="374481280" title="breast friends" />
      <div className="charity-detail-grid">
        <CharityMetadata className="metadata" />
        <CharityInfoBox className="charity-info-box" />
        <div className="charity-detail-sidebar">
          <CharityDonateBox className="charity-donate-box" />
          <RelatedCharities className="related-charities" />
        </div>
      </div>
    </div>
  );
}
