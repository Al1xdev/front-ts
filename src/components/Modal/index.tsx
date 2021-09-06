import React from 'react';

import { useTypeSelector } from '../../hooks/useTypeSelector';

interface IModal {
  children?: React.ReactChild | React.ReactNode;
}

const Modal: React.FC<IModal> = ({ children }) => {
  const isOpen = useTypeSelector((state) => state.posts.isOpened);

  return (
    <div className={`modal ${isOpen ? 'modal_active' : ''}`}>
      <div
        className={`modal__container ${isOpen ? 'modal_active-container' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
