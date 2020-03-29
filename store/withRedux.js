import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import configureStore from './configureStore';

const store = configureStore();

export default function withRedux(PageComponent) {
  const WithRedux = ({ initialReduxState, ...props }) => {
    return (
      <Provider store={store}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <PageComponent {...props} />
      </Provider>
    );
  };

  // Make sure people don't use this HOC on _app.js level
  if (process.env.NODE_ENV !== 'production') {
    const isAppHoc =
      PageComponent === App || PageComponent.prototype instanceof App;
    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component';

    WithRedux.displayName = `withRedux(${displayName})`;
  }

  return WithRedux;
}
