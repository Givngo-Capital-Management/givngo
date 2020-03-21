import React from 'react';
import './CharityGridHeader.scss';

export default function CharityGridHeader(props) {
  const { title } = props;
  return (
    <div className="charity-grid-header">
      <span className="title">{title}</span>
    </div>
  );
}
