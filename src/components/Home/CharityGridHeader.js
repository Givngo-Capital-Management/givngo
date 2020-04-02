import React from 'react';
import styles from './CharityGridHeader.module.scss';

export default function CharityGridHeader(props) {
  const { title } = props;
  return (
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
