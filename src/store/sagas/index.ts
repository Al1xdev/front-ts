import { all } from 'redux-saga/effects';
import { authWatcher } from './auth';

export function* rootSaga() {
  yield all([authWatcher()]);
}
