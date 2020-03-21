import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import AppLayout from './components/AppLayout/AppLayout';
import Charity from './containers/Charity/Charity';

// Route order matters: "/" matches every route,
// so it needs to be last
export default function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/charity" component={Charity} />
        <Route path="/" component={Home} />
      </Switch>
    </AppLayout>
  );
}
