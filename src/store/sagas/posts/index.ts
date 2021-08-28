import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ActionsPostsTypes } from '../../reducers/Posts/types';
import {
  fetchPosts,
  setError,
  setIsLoaded,
} from '../../reducers/Posts/actions';
import { getPosts } from '../../../api/Entiry/Posts';
import { IPosts } from '../../../types/Posts';

function* getPost(): SagaIterator {
  try {
    put(setIsLoaded(true));
    const res: Array<IPosts> = yield call(getPosts);
    yield put(fetchPosts(res));
  } catch (error) {
    yield put(setError(error));
  } finally {
    put(setIsLoaded(false));
  }
}

export function* postWatcher() {
  yield takeEvery(ActionsPostsTypes.POST_REQUEST, getPost);
}
