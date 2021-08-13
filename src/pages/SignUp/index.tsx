import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FormInputRegestration } from '../../types/Pages/SignUp';
import { SchemaSignUpForm } from '../../utils/helpers/SchemaSignUp';
import { signUp } from '../../store/reducers/auth/actions';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useTypeSelector(({ auth }) => auth.isAuthenticated);

  useEffect(() => {
    if (isAuth) history.push('/');
  }, [isAuth, history]);

  const initialValues: FormInputRegestration = {
    login: '',
    password: '',
  };

  const onSubmit = (data: FormInputRegestration) => {
    dispatch(signUp(data));
  };

  return (
    <div className="auth">
      <div className="">
        <h2 className="auth__title">Регистрация</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SchemaSignUpForm}
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
                className="auth__input"
                name="login"
                placeholder="введите почту"
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="auth__error">
                {errors.login && touched.login && <span>{errors.login}</span>}
              </div>
              <input
                className="auth__input"
                name="password"
                placeholder="введите пароль"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="auth__error">
                {errors.password && touched.password && (
                  <span>{errors.password}</span>
                )}
              </div>
              <button className="auth__btn button" type="submit">
                зарегиcтрироваться
              </button>
            </form>
          )}
        </Formik>
        <div className="auth__create">
          <Link to="/login" className="auth__account">
            Уже есть аккаунт?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
