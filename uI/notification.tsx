import * as React from 'react';
import { messageType, NotificationType } from '../src/types';

const notification = ({ notification }: { notification: NotificationType }) => {
  let className = 'success';
  if (notification.maessageType === messageType.error) {
    className = 'error';
  }
  if (notification.maessageType === messageType.prnding) {
    className = 'pending';
  }
  return (
    <div className={`notification ${className}`}>
      <p>{notification.message}</p>
    </div>
  );
};

export default notification;
