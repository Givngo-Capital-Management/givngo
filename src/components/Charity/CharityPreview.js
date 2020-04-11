import React from 'react';
import { Button, Image, Icon } from 'semantic-ui-react';
import styles from './CharityPreview.module.scss';
import moment from 'moment'

export default function CharityPreview(props) {
  const { horizontal, donateUrl, name, videoDate, videoId, videoPreview, videoTitle } = props;
  const date = moment.utc(videoDate * 1000).format('MMMM DD, YYYY').toString()
  return (
    <div
      className={[styles.preview, horizontal ? styles.horizontal : null].join(
        ' ',
      )}
    >
      <div className={styles.image}>
        <Image src={videoPreview} />
        <div className={styles.time}>
          <span>05:22</span>
        </div>
      </div>

      <div className={styles.info}>
        <div className={`${styles.bold} ${styles.lines}`}>{videoTitle}</div>
        <div className={styles.metadata}>
        <div className={styles.title}>{name}</div>
          <div>
            <span>{date}</span>
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
