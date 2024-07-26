import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./CustomModal.module.scss";

const CustomModal = ({
  show,
  handleClose,
  title,
  body,
  onConfirm,
  confirmText,
  cancelText,
}) => {
  return (
    <Modal show={show} onHide={handleClose} className={styles.customModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancelText}
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
};

export { CustomModal };
