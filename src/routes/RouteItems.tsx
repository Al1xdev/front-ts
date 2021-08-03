import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';

import { routes } from './routes';

const RouteItem: React.FC = () => {
  const isAuth = useTypeSelector((state) => state.auth);

  return (
    <>
      <Router>
        <Switch>
          {isAuth ? <Redirect exact from="/" to="/login" /> : null}
          {routes.map((route) => {
            return (
              <Route key={route.path} path={route.path} exact={route.exact}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
        F
      </Router>
    </>
  );
};
export default RouteItem;
