import React from 'react';

import { IButton } from './types';

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
