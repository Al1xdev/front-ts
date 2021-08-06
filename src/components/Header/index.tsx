import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__title">Products</div>
      <div className="header__buttons-group">
        <div className="header__toggle" />
        <button className="header__btn-add">Добавить</button>
      </div>
    </header>
  );
};

export default Header;
