import React from 'react';

import RouteItems from '../../routes';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Spinner from '../Spinner';
import Notification from '../Notification';

const App: React.FC = () => {
  const isLoaded = useTypeSelector(({ auth }) => auth.isLoaded);

  return (
    <div className="container">
      <Notification />
      {isLoaded ? <Spinner /> : <RouteItems />}
    </div>
  );
};

export default App;
