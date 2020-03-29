import React from 'react';
import 'semantic-ui-css/semantic.min.css';

export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
