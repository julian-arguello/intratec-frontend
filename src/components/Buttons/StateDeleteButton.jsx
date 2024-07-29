import { useState } from "react";
import { RoleAdmin } from "../authRole/RoleAdmin";
import { MdOutlineDelete } from "react-icons/md";
import { CustomModal } from "../UI/CustomModal/CustomModal";
import { useService } from "../../context/Service.Context";
import { useNotify } from "../../context/Notify.Context";
import { Loader } from "../UI/Loader/Loader";

const StateDeleteButton = ({ serviceId, stateDelete, active, className }) => {
  const { delServiceState } = useService();
  const [showModal, setShowModal] = useState(false);
  const { notify } = useNotify();
  const [loading, setLoading] = useState(false);


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const remove = () => {
    delServiceState(serviceId, stateDelete).then((data) => {
      notify(data.msg);
      handleClose();
    });
  };

  return (
    <RoleAdmin>
      <button
        onClick={handleShow}
        className={`btn btn-danger d-flex align-items-center align-items-center ${className}`}
        disabled={active}
      >
        <MdOutlineDelete /> <span className="m-0 ms-2">Eliminar</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Confirmación"
        onConfirm={remove}
        confirmText="Eliminar"
        cancelText="Cancelar"
      >
        {`¿Estás seguro de que deseas eliminar el estado ${stateDelete}?`}
      </CustomModal>
    </RoleAdmin>
  );
};

export { StateDeleteButton };
