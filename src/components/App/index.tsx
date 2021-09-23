import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteItems from '../../routes';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Spinner from '../Spinner';
import Notification from '../Notification';

const App: React.FC = () => {
  const isLoaded = useTypeSelector(({ auth }) => auth.isLoaded);

  return (
    <Router>
      <div className="container">
        <Notification />
        {isLoaded ? <Spinner /> : <RouteItems />}
      </div>
    </Router>
  );
};

export default App;
