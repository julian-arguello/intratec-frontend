import { useState } from "react";
import { RoleSuperAdmin } from "../../authRole/RoleSuperAdmin";
import { MdOutlineDelete } from "react-icons/md";
import { useClient } from "../../../context/Client.Context";
import { CustomModal } from "../../UI/CustomModal/CustomModal";
import { useNotify } from "../../../context/Notify.Context";
import { Loader } from "../../UI/Loader/Loader";

const ClientDeleteButton = ({ client, className }) => {
  const { delClient, setReload } = useClient();
  const [showModal, setShowModal] = useState(false);
  const { notify } = useNotify();
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const remove = () => {
    setLoading(true);
    delClient(client._id).then((data) => {
      setLoading(false);
      if (data.status === 'success') {
        notify(data.msg, 'success');
        setReload((prev) => !prev);
      } else {
        notify(data.msg, 'error');
      }
      handleClose();
    }).catch((error) => {
      setLoading(false);
      notify("Ocurrió un error inesperado. Inténtalo de nuevo.", 'error');
      handleClose();
    });
  };

  return (
    <RoleSuperAdmin>
      <button
        onClick={handleShow}
        className={`btn btn-danger d-flex align-items-center align-items-center ${className}`}
      >
        <MdOutlineDelete /> <span className="m-0 ms-2">Eliminar</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Confirmación"
        onConfirm={remove}
        confirmText={loading ? <Loader /> : (<><MdOutlineDelete /> <span className="m-0 ms-2">Eliminar</span></>)}
        classNameBtnOk={"btnActionModal"}
        disabledBtnOk={loading}
      >
        {`¿Estás seguro que deseas eliminar el cliente ${client.name_busines}? Ten en cuenta que todos los servicios asociados a este cliente también serán eliminados.`}
      </CustomModal>
    </RoleSuperAdmin>
  );
};

export { ClientDeleteButton };
