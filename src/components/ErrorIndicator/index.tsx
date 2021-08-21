import React from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const ErrorIndicator: React.FC = () => {
  const error = useTypeSelector(({ auth }) => auth.error);

  return (
    <div className="error-indicator">
      <div className="error-indicator__message">{error}</div>
    </div>
  );
};

export default ErrorIndicator;
