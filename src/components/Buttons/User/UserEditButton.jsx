import { useState } from "react";
import { RoleSuperAdmin } from "../../authRole/RoleSuperAdmin";
import { CustomModal } from "../../UI/CustomModal/CustomModal";
import { UserFormEdit } from "../../users/UserFormEdit";
import { useUser } from "../../../context/User.Context";
import { useNotify } from "../../../context/Notify.Context";
import { Loader } from "../../UI/Loader/Loader";
import { MdClear } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const UserEditButton = ({ user, className }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { editUser, state } = useUser();
  const { notify } = useNotify();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (values) => {
    setLoading(true);
    values._id = user._id;
    editUser(values, false)
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
    <RoleSuperAdmin>
      <button
        onClick={handleShow}
        className={`btn btn-primary d-flex align-items-center ${className}`}
      >
        <FaRegEdit /> <span className="m-0 ms-2">Editar</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Editar Usuario"
        onConfirm={() =>
          document
            .getElementById("edit-user-form")
            .dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            )
        }
        confirmText={
          loading ? (
            <Loader />
          ) : (
            <>
              <FaRegEdit /> <span className="m-0 ms-2">Editar</span>
            </>
          )
        }
        classNameBtnOk={"btnActionModal"}
        disabledBtnOk={loading}
        cancelText={
          <>
            <MdClear /> <span className="m-0 ms-2">Cancelar</span>
          </>
        }
        confirmVariant="primary"
        className={"m-0 p-0"}
      >
        <UserFormEdit
          initialValues={{
            name: user.name,
            lastname: user.lastname,
            role_id: user.role_id,
            softDelete: user.softDelete,
          }}
          onSubmit={handleSubmit}
          state={state}
        />
      </CustomModal>
    </RoleSuperAdmin>
  );
};

export { UserEditButton };
