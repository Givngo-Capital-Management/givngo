import React from 'react';
import Head from 'next/head';
import HeaderNav from './HeaderNav';
import styles from './AppLayout.module.scss';

const AppLayout = (props: any) => {
  const children = props.children;
  return (
      <div className={styles.layout}>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <title>givngo</title>

          <link rel='manifest' href='/manifest.json' />
          <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png'></link>
          <meta name='theme-color' content='#317EFB' />
        </Head>
        <HeaderNav {...props}/>
        {children}
      </div>
  );
};

export default AppLayout;
