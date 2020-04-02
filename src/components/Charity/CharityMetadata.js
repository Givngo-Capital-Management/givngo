import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import styles from './CharityMetadata.module.scss';

export default function CharityMetadata() {
  return (
    <div className={styles.metadata}>
      <h3>Video title</h3>
      <div className={styles.stats}>
        <span>Mar 19, 2020</span>
        <div className={styles.actions}>
          <Button basic icon labelPosition="left">
            <Icon name="share" />
            Share
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
}
