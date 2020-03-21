import React from 'react';
import './CharityGrid.scss';
import { Divider } from 'semantic-ui-react';
import CharityPreview from '../CharityPreview/CharityPreview';
import CharityGridHeader from './CharityGridHeader/CharityGridHeader';

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
        <CharityPreview />
      </div>
      {hideDivider ? null : <Divider />}
    </>
  );
}
