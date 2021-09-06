import React from 'react';

interface IButton {
  children: React.ReactChild | React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
}

const Button: React.FC<IButton> = ({ children, onClick, type, color }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      type={type}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
