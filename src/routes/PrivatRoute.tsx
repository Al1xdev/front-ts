import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useTypeSelector } from '../hooks/useTypeSelector';

const PrivatRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const isAuth = useTypeSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivatRoute;
