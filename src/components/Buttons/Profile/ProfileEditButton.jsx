import { useState } from "react";
import { CustomModal } from "../../UI/CustomModal/CustomModal";
import { ProfileFormEdit } from "../../profile/ProfileDetail/ProfileFormEdit"; 
import { useUser } from "../../../context/User.Context";
import { useNotify } from "../../../context/Notify.Context";
import { Loader } from "../../UI/Loader/Loader";
import { MdClear } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ProfileEditButton = ({ className, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { profileEdit } = useUser();

  const { notify } = useNotify();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (values) => {
    console.log("handleSubmit ", values)
    setLoading(true);
    values._id = user._id;

    profileEdit(values)
      .then((res) => {
        setLoading(false);
        if (res.status === "success") {
          notify(res.msg, "success");
        } else {
          notify(res.msg, "error");
        }
      })
      .catch(() => {
        setLoading(false);
        notify("Ocurrió un error inesperado. Inténtalo de nuevo.", "error");
      });

    handleClose();
  };

  return (
    <>
      <button
        onClick={handleShow}
        className={`btn btn-primary d-flex align-items-center ${className}`}
      >
        <FaRegEdit /> <span className="m-0 ms-2">Editar</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Editar Perfil"
        onConfirm={() => document.getElementById("edit-profile-form").dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
        confirmText={loading ? <Loader /> : (<><FaRegEdit /> <span className="m-0 ms-2">Editar</span></>)}
        classNameBtnOk={"btnActionModal"}
        disabledBtnOk={loading}
        cancelText={<div className="d-flex align-items-around align-items-center"><MdClear /> <span className="m-0 ms-1">Cancelar</span></div>}
        confirmVariant="primary"
        className={"m-0 p-0"}
        >

        <ProfileFormEdit
          initialValues={{
            name: user.name,
            lastname: user.lastname,
          }}
          onSubmit={handleSubmit}
        />
      </CustomModal>
    </>
  );
};

export { ProfileEditButton };
