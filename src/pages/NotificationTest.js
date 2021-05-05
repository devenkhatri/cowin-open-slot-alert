import React from 'react';
import addNotification from 'react-push-notification';
import ReactNotifications from 'react-browser-notifications';

const NotificationTest = () => {
    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue',
            native: true // when using native, your OS will handle theming.
        });
    };
    return (
        <>
            <button onClick={buttonClick} className="button">
                Test Notification
            </button>
        </>
    )
}

export default NotificationTest;