import { call, put, takeEvery, SagaReturnType } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import {
  ActionsPostsTypes,
  DeletePost,
  CreatePostItem,
  EditPost,
  IsEditing,
} from '../../reducers/Posts/types';
import {
  setPost,
  fetchPosts,
  modalOpen,
  setError,
  setIsLoaded,
  clearFields,
  isEdit,
} from '../../reducers/Posts/actions';
import { addNotification } from '../../reducers/notifications/actions';
import { INotificationMsg } from '../../../types/Notification';
import {
  getPosts,
  deletePost,
  createPost,
  editPost,
} from '../../../api/Entiry/Posts';

function* getPost(): SagaIterator {
  try {
    const res: SagaReturnType<typeof getPosts> = yield call(getPosts);
    yield put(fetchPosts(res.data));
  } catch (error: any) {
    yield put(setError(error));
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
      message: `Элемент успешно удален!`,
      type: 'success',
    };
    yield put(addNotification(postNitification));
  } catch (error: any) {
    yield put(setError(error));
  } finally {
    yield put(setIsLoaded(false));
  }
}

function* createNewPost(action: CreatePostItem): SagaIterator {
  try {
    yield call(createPost, action.payload.post);
    const res: SagaReturnType<typeof getPosts> = yield call(getPosts);
    yield put(fetchPosts(res.data));
    yield put(modalOpen(false));
    yield put(setIsLoaded(true));
    const postNitification: INotificationMsg = {
      id: +new Date().toLocaleString(),
      message: `Элемент успешно добавлен!`,
      type: 'success',
    };
    yield put(addNotification(postNitification));
    yield put(setPost(action.payload.post));
    yield put(clearFields());
  } catch (error: any) {
    yield put(setError(error));
  } finally {
    yield put(setIsLoaded(false));
  }
}

function* editItem(action: IsEditing): SagaIterator {
  try {
    yield put(isEdit(true));
    yield put(modalOpen(true));
    yield put(setPost(action.payload.post));
  } catch (error: any) {
    yield put(setError(error));
  }
}

function* editPostItem(action: EditPost): SagaIterator {
  try {
    yield call(editPost, action.payload.post);
    const res: SagaReturnType<typeof getPosts> = yield call(getPosts);
    yield put(fetchPosts(res.data));
    const postNitification: INotificationMsg = {
      id: 1,
      message: `Элемент обновлен успешно!`,
      type: 'success',
    };
    yield put(addNotification(postNitification));
    yield put(clearFields());
    yield put(modalOpen(false));
    yield put(isEdit(false));
  } catch (error: any) {
    yield put(setError(error));
  } finally {
    yield put(setIsLoaded(false));
  }
}

export function* postWatcher(): SagaIterator {
  yield takeEvery(ActionsPostsTypes.POST_REQUEST, getPost);
  yield takeEvery(ActionsPostsTypes.DELETE_POST, deleteItem);
  yield takeEvery(ActionsPostsTypes.CREATE_POST, createNewPost);
  yield takeEvery(ActionsPostsTypes.OPEN_MODAL_EDIT, editItem);
  yield takeEvery(ActionsPostsTypes.EDIT_POST, editPostItem);
}
