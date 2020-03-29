import React from 'react';
import { Image, Button } from 'semantic-ui-react';
import styles from './CharityInfoBox.module.scss';

export default function CharityInfoBox() {
  return (
    <div className={styles.box}>
      <Image
        className={styles.image}
        src="http://via.placeholder.com/48x48"
        circular
      />
      <div className={styles.info}>
        <div className="charity-name">Charity Name</div>
        <span>80k followers</span>
      </div>
      <Button className={styles.follow} color="orange">
        Follow
      </Button>
      <div className={styles.description}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
