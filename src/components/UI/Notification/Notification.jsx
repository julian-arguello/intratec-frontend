import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import styles from "./Notification.module.scss";

const Notification = ({ message, type, onClose }) => {
  return (
    <ToastContainer className={styles.toastContainer}>
      {message && (
        <Toast
          onClose={onClose}
          show={message !== null}
          //delay={8000}
          //autohide
          className={`${styles.toast} `}
        >
          <Toast.Header className={`${styles.toastHeader} ${type === 'success' ? styles.success : styles.error}`}>
            <div className={styles.icon}>
              {type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
            </div>
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
