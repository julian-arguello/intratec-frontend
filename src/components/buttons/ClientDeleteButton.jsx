import { useState } from "react";
import { RoleSuperAdmin } from "../authRole/RoleSuperAdmin";
import { MdOutlineDelete } from "react-icons/md";
import { useClient } from "../../context/Client.Context";
import { CustomModal } from "../UI/CustomModal/CustomModal";

const ClientDeleteButton = ({ client, className }) => {
  const { delClient, setReload } = useClient();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const remove = () => {
    delClient(client._id).then((data) => {
      setReload((prev) => !prev);
      handleClose();
    });
  };

  return (
    <RoleSuperAdmin>
      <button
        onClick={handleShow}
        className={`btn btn-outline-danger d-flex align-items-center align-items-center ${className}`}
      >
        <MdOutlineDelete /> <span className="m-0 ms-2">Eliminar</span>
      </button>


      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Confirmación"
        body={`¿Estás seguro que deseas eliminar el cliente ${client.name_busines}? Ten en cuenta que todos los servicios asociados a este cliente también serán eliminados.`}
        onConfirm={remove}
        confirmText="Eliminar"
        cancelText="Cancelar"
      />

    </RoleSuperAdmin>
  );
};

export { ClientDeleteButton };
