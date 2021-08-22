import { AuthState } from './auth/types';
import { NotificationState } from './notifications/types';
import { PostsState } from './Posts/types';

export interface IRedusersTypes {
  auth: AuthState;
  notification: NotificationState;
  posts: PostsState;
}
