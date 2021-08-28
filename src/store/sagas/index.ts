import { all } from 'redux-saga/effects';

import { authWatcher } from './auth';
import { natificationWatcher } from './notification';
import { postWatcher } from './posts';

export function* rootSaga() {
  yield all([authWatcher(), natificationWatcher(), postWatcher()]);
}
