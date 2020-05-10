import React from 'react';
import { Button, Image, Icon } from 'semantic-ui-react';
import styles from './CharityPreview.module.scss';
import moment from 'moment'
import Link from 'next/link';
import DonateModal from '../Stripe/DonateModal';

export default function CharityPreview(props) {
  const { horizontal, charity } = props;

  const id = charity ? charity.id : ""
  const name = charity ? charity.name : ""
  const videoDate = charity ? charity.video_date : ""
  const videoTitle = charity ? charity.video_title : ""
  const videoPreview = charity ? charity.video_preview : ""

  const date = moment.utc(videoDate * 1000).format('MMMM DD, YYYY').toString()

  const donateButton = (
    <Button className="mini compact ui orange basic smaller">
      <Icon name="heart outline" />
      Donate
    </Button>
  )

  return (
    <div
      className={[styles.preview, horizontal ? styles.horizontal : null].join(
        ' ',
      )}
    >
      <Link href={`/charity/${id}`}>
        <a>
          <div className={styles.image}>
            <Image src={videoPreview} />
            <div className={styles.time}>
              <span>05:22</span>
            </div>
          </div>
        </a>
      </Link>

      <div className={styles.info}>
        <Link href={`/charity/${id}`}>
          <a>
            <div className={`${styles.bold} ${styles.lines}`}>{videoTitle}</div>
          </a>
        </Link>
        <div className={styles.metadata}>
        <div className={styles.title}>{name}</div>
          <div>
            <span>{date}</span>
            <p>Short description</p>
          </div>
        </div>
        <DonateModal charity={charity} button={donateButton}/>
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
