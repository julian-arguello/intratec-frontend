import { useState } from "react";
import { CustomModal } from "../../UI/CustomModal/CustomModal";
import { ProfilePasswordFormEdit } from "../../../components/profile/ProfileDetail/ProfilePasswordFormEdit";
import { useAuth } from "../../../context/Auth.Context";
import { useNotify } from "../../../context/Notify.Context";
import { Loader } from "../../UI/Loader/Loader";
import { MdClear } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const ProfilePasswordEditButton = ({ className, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { updatePass } = useAuth();
  const { notify } = useNotify();

  const handleClose = () => {
    setShowModal(false);
    setError(null);
  };

  const handleShow = () => setShowModal(true);

  const clearError = () => setError(null);

  const handleSubmit = (values) => {
    setLoading(true);
    updatePass(values)
      .then((res) => {
        setLoading(false);
        if (res.status === "success") {
          notify(res.msg, "success");
          handleClose();
        } else {
          setError(res.msg);
        }
      })
      .catch(() => {
        setLoading(false);
        setError("Ocurrió un error inesperado. Inténtalo de nuevo.");
      });
  };

  return (
    <>
      <button
        onClick={handleShow}
        className={`btn btn-warning d-flex align-items-center ${className}`}
      >
        <RiLockPasswordLine /> <span className="m-0 ms-2">Modificar Contraseña</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Modificar Contraseña"
        onConfirm={() => document.getElementById("edit-password-form").dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
        confirmText={loading ? <Loader /> : (<><FaRegEdit /> <span className="m-0 ms-2">Editar</span></>)}
        classNameBtnOk={"btnActionModal"}
        disabledBtnOk={loading}
        cancelText={<div className="d-flex align-items-around align-items-center"><MdClear /> <span className="m-0 ms-1">Cancelar</span></div>}
        confirmVariant="primary"
        className={"m-0 p-0"}
      >
        <ProfilePasswordFormEdit
          initialValues={{
            oldPassword: '',
            newPassword: '',
          }}
          onSubmit={handleSubmit}
          error={error} 
          clearError={clearError} 
        />
      </CustomModal>
    </>
  );
};

export { ProfilePasswordEditButton };
