import { AuthState } from './auth/types';
import { NotificationState } from './notifications/types';

export interface IRedusersTypes {
  auth: AuthState;
  notification: NotificationState;
}
