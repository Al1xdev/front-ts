import { put, takeEvery, delay } from 'redux-saga/effects';

import {
  ActionsNotificationTypes,
  AddNotification,
} from '../../reducers/notifications/types';
import { removeNotification } from '../../reducers/notifications/actions';

function* showNotification(action: AddNotification) {
  const { id } = action.payload.message;
  yield delay(4000);
  yield put(removeNotification(id));
}

export function* natificationWatcher() {
  yield takeEvery(ActionsNotificationTypes.ADD_NOTIFICATION, showNotification);
}
