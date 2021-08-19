import { all } from 'redux-saga/effects';
import { authWatcher } from './auth';
import { natificationWatcher } from './notification';

export function* rootSaga() {
  yield all([authWatcher(), natificationWatcher()]);
}
