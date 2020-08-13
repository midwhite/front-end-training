import React from 'react';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import WelcomePage from '../components/pages/welcome/WelcomePage';
import Q1 from '../components/pages/q1';
import Q2 from '../components/pages/q2';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/q1" component={Q1} />
      <Route path="/q2" component={Q2} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
