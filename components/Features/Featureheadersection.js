import React from 'react';
import styles from './FeatureHeaderSection.module.scss';

export default function FeatureHeaderSection() {
  return (
    <div className={styles.section} style={{ paddingBottom: '50px' }}>
      <div className={styles['div-wrap']}>
        <h1 className={styles.heading}>Donation creation with givngo</h1>
        <div className={styles['text-block']}>
          Powerful tools to increase donations, grow membersm and create
          awareness.
        </div>
      </div>
    </div>
  );
}
