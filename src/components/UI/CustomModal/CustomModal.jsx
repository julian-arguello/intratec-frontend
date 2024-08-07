import { Modal, Button } from "react-bootstrap";
import styles from "./CustomModal.module.scss";
import { MdClear } from "react-icons/md";


const CustomModal = ({
  show,
  handleClose,
  title,
  onConfirm,
  confirmText,
  cancelText,
  children,
  confirmVariant = "danger",
  classNameBtnOk = "",
  disabledBtnOk = false
}) => {
  return (
    <Modal show={show} onHide={handleClose} className={styles.customModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} className="btn-cancel">
          <MdClear /> <span className="m-0 ms-1">Cancelar</span>
        </Button>
        <Button variant={confirmVariant} disabled={disabledBtnOk} className={classNameBtnOk} onClick={onConfirm}>
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { CustomModal };
