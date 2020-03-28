import React from 'react';
import { Divider } from 'semantic-ui-react';
import CharityPreview from '../Charity/CharityPreview';
import CharityGridHeader from './CharityGridHeader';
import './CharityGrid.scss';

export default function CharityGrid(props) {
  const { title, hideDivider } = props;
  return (
    <>
      <CharityGridHeader title={title} />
      <div className="charity-grid">
        <CharityPreview />
        <CharityPreview />
        <CharityPreview />
        <CharityPreview />
      </div>
      {hideDivider ? null : <Divider />}
    </>
  );
}
