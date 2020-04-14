import React from 'react';
import { Divider } from 'semantic-ui-react';
import CharityPreview from '../Charity/CharityPreview';
import CharityGridHeader from './CharityGridHeader';
import styles from './CharityGrid.module.scss';

export default function CharityGrid(props) {
  const { title, charities, hideDivider } = props;
  
  let previews = []

  for (let i = 0; i < charities.length; i++) {
    const charity = charities[i]
    previews.push(
      <CharityPreview
        key={i}
        charity={charity}
      />
    )
  }

  return (
    <>
      <CharityGridHeader title={title} />
      <div className={styles.grid}>
        {previews}
      </div>
      {hideDivider ? null : <Divider />}
    </>
  );
}
