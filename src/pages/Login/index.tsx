import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FormInputLogin } from '../../types/Pages/Login';
import { SchemaLoginForm } from '../../utils/helpers/SchemaLogin';
import { login } from '../../store/reducers/auth/actions';
import ErrorIndicator from '../../components/ErrorIndicator';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const initialValues: FormInputLogin = {
  login: '',
  password: '',
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useTypeSelector(({ auth }) => auth.isAuthenticated);

  useEffect(() => {
    if (isAuth) history.push('/');
  }, [isAuth, history]);

  const onSubmit = (data: FormInputLogin) => {
    dispatch(login(data));
  };

  return (
    <div className="auth">
      <div>
        <h2 className="auth__title">Вход в приложение!</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SchemaLoginForm}
        >
          {({
            values,
            errors,
            handleBlur,
            touched,
            handleChange,
            handleSubmit,
          }) => (
            <form className="auth__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="login"
                value={values.login}
                placeholder="логин"
                className="auth__input"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="auth__error">
                {errors.login && touched.login && <span>{errors.login}</span>}
              </div>
              <input
                type="text"
                name="password"
                value={values.password}
                placeholder="пароль"
                className="auth__input"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="auth__error">
                {errors.password && touched.password && (
                  <span>{errors.password}</span>
                )}
              </div>
              <ErrorIndicator />
              <button type="submit" className="auth__btn button">
                войти
              </button>
            </form>
          )}
        </Formik>
        <div className="auth__create">
          <Link to="/signUp" className="auth__account">
            Создать аккаунт!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
