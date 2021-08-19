import {
  ActionsNotificationTypes,
  AddNotification,
  RemoveNotification,
} from './types';
import { INotificationMsg } from '../../../types/Notification';

export const addNotification = (
  message: INotificationMsg,
): AddNotification => ({
  type: ActionsNotificationTypes.ADD_NOTIFICATION,
  payload: { message },
});

export const removeNotification = (id: number): RemoveNotification => ({
  type: ActionsNotificationTypes.REMOVE_NOTIFICATION,
  payload: { id },
});
