import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { privatRoutes, publicRoutes } from './routes';
import { useTypeSelector } from '../hooks/useTypeSelector';

const RouteItems: React.FC = () => {
  const isAuth = useTypeSelector((state) => state.auth.isAuthenticated);

  return isAuth ? (
    <Switch>
      {privatRoutes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default RouteItems;
