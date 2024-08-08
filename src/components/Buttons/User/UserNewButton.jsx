import { useEffect, useState } from "react";
import { RoleSuperAdmin } from "../../authRole/RoleSuperAdmin";
import { CustomModal } from "../../UI/CustomModal/CustomModal";
import { UserFormNew } from "../../../components/users/UserFormNew";
import { TbUsers } from "react-icons/tb";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { useNotify } from "../../../context/Notify.Context";
import { useUser } from "../../../context/User.Context";
import { Loader } from "../../UI/Loader/Loader";

const UserNewButton = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { notify } = useNotify();
  const { state, addUser,findRole } = useUser();

  useEffect(() => {
    findRole();
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (user) => {
    setLoading(true);
    user.created_at = new Date();
    user.active = true;
  
    addUser(user)
      .then((res) => {
        setLoading(false);
        if (res.status === "success") {
          notify(res.msg, "success");
        } else {
          notify(res.msg, "error");
        }
        handleClose();
      })
      .catch((error) => {
        setLoading(false);
        notify("Ocurrió un error inesperado. Inténtalo de nuevo.", "error");
        handleClose();
      });
  };
  

  return (
    <RoleSuperAdmin>
      <button
        onClick={handleShow}
        className={`btn btn-success d-flex align-items-center ${className}`}
      >
        <TbUsers /> <span className="m-0 ms-2">Nuevo usuario</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Nuevo Usuario"
        onConfirm={() =>
          document
            .getElementById("new-user-form")
            .dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            )
        }
        confirmText={
          loading ? (
            <Loader />
          ) : (
            <>
              <TbUsers /> <span className="m-0 ms-2">Crear</span>
            </>
          )
        }
        classNameBtnOk={"btnActionModal btn-success"}
        disabledBtnOk={loading}
        confirmVariant="primary"
        className={"m-0 p-0"}
      >
        <UserFormNew onSubmit={handleSubmit} state={state} />
      </CustomModal>
    </RoleSuperAdmin>
  );
};

export { UserNewButton };
