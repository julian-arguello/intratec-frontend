import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./CustomModal.module.scss";

const CustomModal = ({
  show,
  handleClose,
  title,
  onConfirm,
  confirmText,
  cancelText,
  children,
  confirmVariant = "danger",
}) => {
  return (
    <Modal show={show} onHide={handleClose} className={styles.customModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancelText}
        </Button>
        <Button variant={confirmVariant} onClick={onConfirm}>
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
  onConfirm: PropTypes.func.isRequired,
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  confirmVariant: PropTypes.string,
};

export { CustomModal };
