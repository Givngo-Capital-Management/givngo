import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import initFirebase from '../src/services/auth/initFirebase';

// Init the Firebase app.
initFirebase();

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

export default App;
