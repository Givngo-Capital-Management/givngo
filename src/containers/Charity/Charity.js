import React from 'react';
import Video from '../../components/Video/Video';
import RelatedCharities from '../../components/RelatedCharities/RelatedCharities';
import './Charity.scss';
import CharityMetadata from '../../components/CharityMetadata/CharityMetadata';

export default function Charity() {
  return (
    <div className="charity-detail-grid">
      <Video className="video" id="396392696" title="breast friends" />
      <CharityMetadata className="metadata" />
      <div
        className="charity-info-box"
        style={{ width: '100%', height: '100px', background: '#BD10E0' }}
      >
        Video Info box
      </div>
      <RelatedCharities className="related-charities" />
    </div>
  );
}
