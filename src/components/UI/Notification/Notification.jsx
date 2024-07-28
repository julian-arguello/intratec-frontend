import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import styles from "./Notification.module.scss";

const Notification = ({ message, onClose }) => {
  return (
    
    <ToastContainer className={` p-3`}>

      {message && (
        <Toast
          onClose={onClose}
          show={message !== null}
          delay={8000}
          autohide
          className={styles.toast}
        >
          <Toast.Header className={styles.toastHeader}>
            <strong className="me-auto">Notificación</strong>
          </Toast.Header>
          <Toast.Body className={styles.toastBody}>
            {message}
          </Toast.Body>
        </Toast>
      )}
    </ToastContainer>
  );
};

export { Notification };
