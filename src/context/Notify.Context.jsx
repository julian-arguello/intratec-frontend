import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Notification } from "../components/UI/Notification/Notification";

const NotifyContext = createContext();

export function NotifyProvider({ children }) {
    const [notification, setNotification] = useState(null);

    const notify = (message) => {
        setNotification(message);
    };

    return (
        <NotifyContext.Provider value={{ notify }}>
            {children}
            {ReactDOM.createPortal(
                <Notification 
                    message={notification} 
                    onClose={() => setNotification(null)} 
                />,
                document.getElementById('notification')
            )}
        </NotifyContext.Provider>
    );
}

export function useNotify() {
    return useContext(NotifyContext);
}
