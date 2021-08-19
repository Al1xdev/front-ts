import { INotificationMsg } from '../../../types/Notification';

export interface NotificationState {
  messages: INotificationMsg[];
}

export enum ActionsNotificationTypes {
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
}

export interface AddNotification {
  type: ActionsNotificationTypes.ADD_NOTIFICATION;
  payload: {
    message: INotificationMsg;
  };
}

export interface RemoveNotification {
  type: ActionsNotificationTypes.REMOVE_NOTIFICATION;
  payload: {
    id: number;
  };
}

export type NotificationAction = AddNotification | RemoveNotification;
