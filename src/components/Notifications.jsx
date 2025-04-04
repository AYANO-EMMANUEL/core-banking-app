import React from 'react';

const Notifications = () => {

    const notifications = [
        {
          type: "Success",
          preview: "Your transaction was successful.",
          time: "2025-03-24 10:00 AM"
        },
        {
          type: "Warning",
          preview: "Your account balance is low.",
          time: "2025-03-24 09:30 AM"
        },
        {
          type: "Error",
          preview: "Failed to process your transaction.",
          time: "2025-03-24 08:45 AM"
        }
      ];
    return (
        <div className="w-[320px] h-max bg-white rounded-lg shadow-lg">
            {notifications.map((notification, index) => (
                <div 
                    key={index} 
                    className={`notification ${notification.type.toLowerCase()} p-4 cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out`}
                >
                    <div className="notification-type font-bold text-lg leading-tight">{notification.type}</div>
                    <div className="notification-preview text-gray-700 leading-4">{notification.preview}</div>
                    <div className="notification-time text-sm text-gray-500 leading-relaxed">{notification.time}</div>
                </div>
            ))}
        </div>
    );
};

export default Notifications;