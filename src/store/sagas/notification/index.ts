import { put, takeEvery, delay } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import {
  ActionsNotificationTypes,
  AddNotification,
} from '../../reducers/notifications/types';
import { removeNotification } from '../../reducers/notifications/actions';

function* showNotification(action: AddNotification): SagaIterator {
  const { id } = action.payload.message;
  yield delay(3000);
  yield put(removeNotification(id));
}

export function* natificationWatcher(): SagaIterator {
  yield takeEvery(ActionsNotificationTypes.ADD_NOTIFICATION, showNotification);
}
