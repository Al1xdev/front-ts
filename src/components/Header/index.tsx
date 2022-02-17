import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../UI/Button';
import { logout } from '../../store/reducers/auth/actions';
import { modalOpen } from '../../store/reducers/Posts/actions';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const logoutHendler = () => {
    dispatch(logout());
  };

  const openModal = () => {
    dispatch(modalOpen(true));
  };

  return (
    <header className="header">
      <div className="header__title">CRUD</div>
      <div className="header__buttons-group">
        <div className="header__toggle" />
        <Button onClick={openModal}>Добавить</Button>
        <Button onClick={logoutHendler}>Выйти</Button>
      </div>
    </header>
  );
};

export default Header;
