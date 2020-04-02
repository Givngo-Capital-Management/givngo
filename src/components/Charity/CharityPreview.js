import React from 'react';
import { Button, Image, Icon } from 'semantic-ui-react';
import styles from './CharityPreview.module.scss';

export default function CharityPreview(props) {
  const { horizontal } = props;
  return (
    <div
      className={[styles.preview, horizontal ? styles.horizontal : null].join(
        ' ',
      )}
    >
      <div className={styles.image}>
        <Image src="http://via.placeholder.com/210x118" />
        <div className={styles.time}>
          <span>05:22</span>
        </div>
      </div>

      <div className={styles.info}>
        <div className={`${styles.bold} ${styles.lines}`}>Video title</div>
        <div className={styles.metadata}>
          <div className={styles.title}>Charity name</div>
          <div>
            <span>November 2, 2020</span>
            <p>Short description</p>
          </div>
        </div>
        <Button className="mini compact ui orange basic smaller">
          <Icon name="heart outline" />
          Donate
        </Button>
        <a href="www.google.ca" className={styles.link}>
          <Icon name="star outline" />
          Follow
        </a>
        <a href="www.google.ca" className={styles.link}>
          <Icon name="share" />
          Share
        </a>
      </div>
    </div>
  );
}
