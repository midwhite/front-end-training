import React from 'react';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import WelcomePage from '../components/pages/welcome/WelcomePage';
import Q1 from '../components/pages/q1';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/q1" component={Q1} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
