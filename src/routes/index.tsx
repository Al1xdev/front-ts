import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivatRoute from './PrivatRoute';
import { Home, SignUp, Login, NotFound } from '../pages';

const RouteItems: React.FC = () => {
  return (
    <Router>
      <Switch>
        <PrivatRoute exact path="/" component={Home} />
        <Route exact component={SignUp} path="/signUp" />
        <Route exact component={Login} path="/login" />
        <Route component={NotFound} path="*" />
      </Switch>
    </Router>
  );
};

export default RouteItems;
