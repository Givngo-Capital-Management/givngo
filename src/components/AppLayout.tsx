import React from 'react';
import HeaderNav from './HeaderNav';
import styles from './AppLayout.module.scss';

const AppLayout = (props: any) => {
  const children = props.children;
  return (
      <div className={styles.layout}>
        <HeaderNav {...props}/>
        {children}
      </div>
  );
};

export default AppLayout;
