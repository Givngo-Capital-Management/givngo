import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import styles from './CharityMetadata.module.scss';
import moment from 'moment';

export default function CharityMetadata(props) {
  const { charity } = props;
  const date = moment.utc(charity.video_date * 1000).format('MMMM DD, YYYY').toString()
  return (
    <div className={styles.metadata}>
      <h3>{charity.video_title}</h3>
      <div className={styles.stats}>
        <span>{date}</span>
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
