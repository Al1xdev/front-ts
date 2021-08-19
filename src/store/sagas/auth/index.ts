import { takeEvery, put, call } from 'redux-saga/effects';
import { auth } from '../../../api/firebase';

import { SignUp, Login, ActionsAuthType } from '../../reducers/auth/types';
import {
  setIsLoaded,
  setError,
  setIsAuthenticated,
} from '../../reducers/auth/actions';
import { addNotification } from '../../reducers/notifications/actions';
import { INotificationMsg } from '../../../types/Notification';

function* login(action: Login) {
  try {
    yield put(setIsLoaded(true));
    yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.payload.userCredential.login,
      action.payload.userCredential.password,
    );
    yield put(setIsAuthenticated(true));
    const authNotification: INotificationMsg = {
      id: 1,
      message: 'Вход выполнен',
      type: 'success',
    };
    yield put(addNotification(authNotification));
  } catch (error) {
    yield put(setError(error.message));
    const authNotification: INotificationMsg = {
      id: 1,
      message: 'Что-то пошло не так',
      type: 'error',
    };
    yield put(addNotification(authNotification));
  } finally {
    yield put(setIsLoaded(false));
  }
}

function* signUp(action: SignUp) {
  try {
    yield put(setIsLoaded(true));
    yield call(
      [auth, auth.createUserWithEmailAndPassword],
      action.payload.userData.login,
      action.payload.userData.password,
    );
    yield put(setIsAuthenticated(true));
    const authNotification: INotificationMsg = {
      id: 1,
      message: 'Вы зарегиcтрировались',
      type: 'success',
    };
    yield put(addNotification(authNotification));
  } catch (error) {
    yield put(setError(error.message));
    const authNotification: INotificationMsg = {
      id: 1,
      message: 'Ошибка зарегиcтрации',
      type: 'error',
    };
    yield put(addNotification(authNotification));
  } finally {
    yield put(setIsLoaded(false));
  }
}

function* logout() {
  try {
    yield put(setIsLoaded(false));
    yield call([auth, auth.signOut]);
    yield put(setIsAuthenticated(false));
    const authNotification: INotificationMsg = {
      id: 1,
      message: 'Выход выполнен',
      type: 'success',
    };
    yield put(addNotification(authNotification));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setIsLoaded(false));
  }
}

export function* authWatcher() {
  yield takeEvery(ActionsAuthType.SIGN_UP, signUp);
  yield takeEvery(ActionsAuthType.LOGIN, login);
  yield takeEvery(ActionsAuthType.LOGOUT, logout);
}
