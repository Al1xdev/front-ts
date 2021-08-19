import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { notificationReducer } from './notifications';
import { IRedusersTypes } from './types';

export const rootReducer = combineReducers<IRedusersTypes>({
  auth: authReducer,
  notification: notificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
