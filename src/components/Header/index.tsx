import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../UI/Button';
import { logout } from '../../store/reducers/auth/actions';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const logoutHendler = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="header__title">CRUD</div>
      <div className="header__buttons-group">
        <div className="header__toggle" />
        <Button>Добавить</Button>
        <Button onClick={logoutHendler}>Выйти</Button>
      </div>
    </header>
  );
};

export default Header;
