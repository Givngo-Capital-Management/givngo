import React from 'react';
import HeaderNav from './HeaderNav';
import './AppLayout.scss';

export default function AppLayout(props) {
  const { children } = props;
  return (
    <div className="app-layout">
      <HeaderNav />
      {children}
    </div>
  );
}
