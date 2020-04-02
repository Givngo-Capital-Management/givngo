import React from 'react';
import HeaderNav from './HeaderNav';
import styles from './AppLayout.module.scss';

export default function AppLayout(props) {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <HeaderNav />
      {children}
    </div>
  );
}
