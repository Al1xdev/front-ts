import { call, put, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ActionsPostsTypes, DeletePost } from '../../reducers/Posts/types';
import {
  fetchPosts,
  setError,
  setIsLoaded,
} from '../../reducers/Posts/actions';
import { addNotification } from '../../reducers/notifications/actions';
import { INotificationMsg } from '../../../types/Notification';
import { getPosts, deletePost } from '../../../api/Entiry/Posts';

function* getPost(): SagaIterator {
  try {
    put(setIsLoaded(true));
    const res: SagaReturnType<typeof getPosts> = yield call(getPosts);
    yield put(fetchPosts(res.data));
  } catch (error) {
    yield put(setError(error));
  } finally {
    put(setIsLoaded(false));
  }
}

function* deleteItem(action: DeletePost): SagaIterator {
  const { id } = action.payload;
  try {
    yield call(deletePost, id);
    const res: SagaReturnType<typeof getPosts> = yield call(getPosts);
    yield put(fetchPosts(res.data));
    const postNitification: INotificationMsg = {
      id: 1,
      message: `Элемент с id-${id} удален`,
      type: 'success',
    };
    yield put(addNotification(postNitification));
  } catch (error) {
    yield put(setError(error));
    const postNitification: INotificationMsg = {
      id: 1,
      message: `Элемент не удален`,
      type: 'error',
    };
    yield put(addNotification(postNitification));
  } finally {
    put(setIsLoaded(false));
  }
}

export function* postWatcher(): SagaIterator {
  yield takeEvery(ActionsPostsTypes.POST_REQUEST, getPost);
  yield takeEvery(ActionsPostsTypes.DELETE_POST, deleteItem);
}
