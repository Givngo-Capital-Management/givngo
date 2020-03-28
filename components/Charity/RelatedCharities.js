import React from 'react';
import CharityPreview from './CharityPreview';
import './RelatedCharities.scss';

export default function RelatedCharities() {
  return (
    <div className="related-charities">
      <CharityPreview horizontal />
      <CharityPreview horizontal />
      <CharityPreview horizontal />
    </div>
  );
}
