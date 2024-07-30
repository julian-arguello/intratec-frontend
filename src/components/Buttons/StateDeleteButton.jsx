import { useState } from "react";
import { RoleAdmin } from "../authRole/RoleAdmin";
import { MdOutlineDelete } from "react-icons/md";
import { CustomModal } from "../UI/CustomModal/CustomModal";
import { useService } from "../../context/Service.Context";
import { useNotify } from "../../context/Notify.Context";
import { Loader } from "../UI/Loader/Loader";
import { MdClear } from "react-icons/md";

const StateDeleteButton = ({ serviceId, stateDelete, active, className }) => {
  const { delServiceState } = useService();
  const [showModal, setShowModal] = useState(false);
  const { notify } = useNotify();
  const [loading, setLoading] = useState(false);


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const remove = () => {
    setLoading(true);
    delServiceState(serviceId, stateDelete).then((res) => {
      setLoading(false);
      if (res.status === 'success') {
        notify(res.msg, 'success');
      } else {
        notify(res.msg, 'error');
      }
      handleClose();
    }).catch((error) => {
      setLoading(false);
      notify("Ocurrió un error inesperado. Inténtalo de nuevo.", 'error');
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
        confirmText={loading ? <Loader /> : (<><MdOutlineDelete /> <span className="m-0 ms-2">Eliminar</span></>)}
        classNameBtnOk={"btnActionModal"}
        disabledBtnOk={loading}
        cancelText={<div className="d-flex align-items-around align-items-center"><MdClear /> <span className="m-0 ms-1">Cancelar</span></div>}
      >
        {`¿Estás seguro de que deseas eliminar el estado ${stateDelete}?`}
      </CustomModal>
    </RoleAdmin>
  );
};

export { StateDeleteButton };
