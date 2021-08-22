import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { notificationReducer } from './notifications';
import { postsReducer } from './Posts';
import { IRedusersTypes } from './types';

export const rootReducer = combineReducers<IRedusersTypes>({
  auth: authReducer,
  notification: notificationReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
