import React from 'react';
import HeaderNav from './HeaderNav';
import styles from './AppLayout.module.scss';

const AppLayout = (props: any) => {
  const children = props.children;
  console.log("AppLayout", process.env.FIREBASE_API_KEY);
  return (
      <div className={styles.layout}>
        <HeaderNav />
        {children}
      </div>
  );
};

export default AppLayout;
