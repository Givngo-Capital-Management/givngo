import React from 'react';
import Video from '../../components/Video/Video';
import './Charity.scss';
import CharityPreview from '../../components/CharityPreview/CharityPreview';

export default function Charity() {
  return (
    <div>
      <Video id="396392696" title="breast friends" />
      <CharityPreview horizontal />
      <CharityPreview />
    </div>
  );
}
