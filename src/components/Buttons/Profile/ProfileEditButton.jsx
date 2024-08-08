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

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      values._id = user._id;
  
      const res = await profileEdit(values);
      setLoading(false);
  
      if (res.status === "success") {
        notify(res.msg, "success");
      } else {
        notify(res.msg, "error");
      }
    } catch (error) {
      setLoading(false);
      notify("Ocurrió un error inesperado. Inténtalo de nuevo.", "error");
    } finally {
      handleClose();
    }
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
        confirmVariant="primary"
        className={"m-0 p-0"}
      >
        <ProfileFormEdit
          initialValues={{
            name: user.name,
            lastname: user.lastname,
            avatar: user.avatar
          }}
          onSubmit={handleSubmit}
        />
      </CustomModal>
    </>
  );
};

export { ProfileEditButton };
