import {
  NotificationState,
  NotificationAction,
  ActionsNotificationTypes,
} from './types';

const initialState: NotificationState = {
  messages: [],
};

export const notificationReducer = (
  state: NotificationState = initialState,
  action: NotificationAction,
): NotificationState => {
  switch (action.type) {
    case ActionsNotificationTypes.ADD_NOTIFICATION:
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    case ActionsNotificationTypes.REMOVE_NOTIFICATION: {
      const currentItem = state.messages.filter(
        (message) => message.id !== action.payload.id,
      );
      return {
        ...state,
        messages: [...currentItem],
      };
    }
    default:
      return state;
  }
};
