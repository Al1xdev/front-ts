import { takeEvery, put, call } from 'redux-saga/effects';
import { auth } from '../../../api/firebase';

import { SignUp, Login, ActionsAuthType } from '../../reducers/auth/types';
import {
  setIsLoaded,
  setError,
  setIsAuthenticated,
} from '../../reducers/auth/actions';

function* login(action: Login) {
  try {
    yield put(setIsLoaded(true));
    yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.payload.userCredential.login,
      action.payload.userCredential.password,
    );
    yield put(setIsAuthenticated(true));
  } catch (error) {
    yield put(setError(error.message));
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
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setIsLoaded(false));
  }
}

function* logout() {
  try {
    yield put(setIsLoaded(false));
    yield call(auth.signOut);
    yield put(setIsAuthenticated(false));
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
