import React from 'react';
import styles from './FeatureFormSection.module.scss';
import FeatureForm from './FeatureForm';

export default function FeatureFormSection() {
  return (
    <div id="Form-section" className={styles['form-container']}>
      <div className={styles['form-text-container']}>
        <div className={styles['form-text-wrapper']}>
          <div className={styles['text-container']}>
            <h1 className={styles.header}>Marketing and Publishing</h1>
            <p className={styles.paragraph}>
              We will publish your videos and ads to the highest converting
              audiences possible. We format videos to fit all major platforms
              like Facebook, Google, Youtube, Vimeo, Instagram and custom sites.
              Givngo success managers create highly targeted campaigns that
              provide live feedback maximizing your marketing ROI.
            </p>
            <ul className={styles.list}>
              <li>
                <div>We create videos, ads, promotions</div>
              </li>
              <li>
                <div>Run targeted marketing campaigns</div>
              </li>
              <li>
                <div>Grow your charity donations</div>
              </li>
            </ul>
            <div className={styles.arrow}>
              <img
                src="https://givngo.io/wp-content/themes/givngo/images/right-arrow-1.svg"
                width="60"
                alt="right-arrow"
                className={styles.image}
              />
            </div>
          </div>
          <FeatureForm />
        </div>
      </div>
    </div>
  );
}
