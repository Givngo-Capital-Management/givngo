import React from 'react';
import { Image, Button } from 'semantic-ui-react';
import styles from './CharityInfoBox.module.scss';

export default function CharityInfoBox(props) {
  const { charity } = props
  return (
    <div className={styles.box}>
      <Image
        className={styles.image}
        src={charity.logo}
        circular
      />
      <div className={styles.info}>
        <div className="charity-name">{charity.name}</div>
        <span>80k followers</span>
      </div>
      <Button className={styles.follow} color="orange">
        Follow
      </Button>
      <div className={styles.description}>
        <p>{charity.description}</p>
      </div>
    </div>
  );
}
