import { call, put, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import {
  ActionsPostsTypes,
  DeletePost,
  CreatePostItem,
} from '../../reducers/Posts/types';
import {
  setPost,
  fetchPosts,
  modalOpen,
  setError,
  setIsLoaded,
} from '../../reducers/Posts/actions';
import { addNotification } from '../../reducers/notifications/actions';
import { INotificationMsg } from '../../../types/Notification';
import { getPosts, deletePost, createPost } from '../../../api/Entiry/Posts';

function* getPost(): SagaIterator {
  try {
    put(setIsLoaded(true));
    const res: SagaReturnType<typeof getPosts> = yield call(getPosts);
    yield put(fetchPosts(res.data));
  } catch (error: any) {
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
      message: `Элемент успешно удален`,
      type: 'success',
    };
    yield put(addNotification(postNitification));
  } catch (error: any) {
    yield put(setError(error));
  } finally {
    put(setIsLoaded(false));
  }
}

function* createNewPost(action: CreatePostItem): SagaIterator {
  try {
    yield call(createPost, action.payload.post);
    const res: SagaReturnType<typeof getPosts> = yield call(getPosts);
    yield put(fetchPosts(res.data));
    yield put(modalOpen(false));
    const postNitification: INotificationMsg = {
      id: 1,
      message: `Элемент успешно добавлен`,
      type: 'success',
    };
    yield put(addNotification(postNitification));
    yield put(setPost(action.payload.post));
  } catch (error: any) {
    yield put(setError(error));
  }
}

export function* postWatcher(): SagaIterator {
  yield takeEvery(ActionsPostsTypes.POST_REQUEST, getPost);
  yield takeEvery(ActionsPostsTypes.DELETE_POST, deleteItem);
  yield takeEvery(ActionsPostsTypes.CREATE_POST, createNewPost);
}
