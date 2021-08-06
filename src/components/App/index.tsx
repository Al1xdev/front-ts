import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Home, Login, SignUp, NotFound } from '../../pages';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const App: React.FC = () => {
  const isAuth = useTypeSelector((state) => state.auth);

  return (
    <div className="container">
      <Router>
        <Switch>
          {isAuth ? <Redirect exact from="/" to="/login" /> : null}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
