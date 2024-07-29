import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Notification } from "../components/UI/Notification/Notification";

const NotifyContext = createContext();

export function NotifyProvider({ children }) {
    const [notification, setNotification] = useState(null);
    const [type, setType] = useState(''); 

    const notify = (message, type = 'success') => {
        setNotification(message);
        setType(type);
    };

    return (
        <NotifyContext.Provider value={{ notify }}>
            {children}
            {ReactDOM.createPortal(
                <Notification 
                    message={notification} 
                    type={type}
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
