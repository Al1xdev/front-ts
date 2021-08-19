import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypeSelector } from '../../hooks/useTypeSelector';
import { removeNotification } from '../../store/reducers/notifications/actions';
import cancel from '../../assets/icons/cancel.svg';

const Notification: React.FC = () => {
  const dispatch = useDispatch();
  const messages = useTypeSelector(({ notification }) => notification.messages);

  const removeNotificationMsg =
    (id: number) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      dispatch(removeNotification(id));
    };

  return (
    <>
      {messages.map((message) => {
        return (
          <div
            key={message.id}
            onClick={removeNotificationMsg(message.id)}
            aria-hidden="true"
            className={`notification ${
              message.type === 'success'
                ? 'notification_success'
                : 'notification_error'
            }`}
          >
            <div className="notification__title">{message.message}</div>
            <img src={cancel} alt="cancel" />
          </div>
        );
      })}
    </>
  );
};

export default Notification;
