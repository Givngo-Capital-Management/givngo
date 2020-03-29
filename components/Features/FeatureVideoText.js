import React from 'react';
import styles from './FeatureVideoText.module.scss';
import FeatureVideo from './FeatureVideo';

export default function FeatureaVideoText() {
  return (
    <div className={styles['video-text-section']}>
      <div className={styles['video-text-wrapper']}>
        <div className={styles['text-wrapper']}>
          <h1 className={styles.heading}>Videos that engage</h1>
          <p className={styles.paragraph}>
            The most effective way to get people engaged and sharing online is
            through a great story with a great video. This is why givngo focuses
            on helping members create videos that tell their story in a way that
            creates action. Our in house team of video creators and success
            managers are always ready to givngo!
          </p>
        </div>
        <div className={styles['video-wrapper']}>
          <FeatureVideo
            id="2F371994595"
            title="Save the Children, Who We Are"
          />
        </div>
      </div>
    </div>
  );
}
