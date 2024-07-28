import { useState } from "react";
import { RoleSuperAdmin } from "../authRole/RoleSuperAdmin";
import { MdOutlineDelete } from "react-icons/md";
import { CustomModal } from "../UI/CustomModal/CustomModal";
import { useService } from "../../context/Service.Context";
import { useNotify } from "../../context/Notify.Context";
import { useNavigate  } from 'react-router-dom';


const ServiceDeleteButton = ({ service, className }) => {
  let navigate = useNavigate();
  const { delService } = useService();
  const [showModal, setShowModal] = useState(false);
  const{ notify } = useNotify();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const remove = () => {
    delService(service._id).then((data) => {
      notify(data.msg);
      navigate('/servicios');
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
        body={`¿Estás seguro de que deseas eliminar el servicio Nº ${service.service_id} de ${service.client.name_busines}?`}
        onConfirm={remove}
        confirmText="Eliminar"
        cancelText="Cancelar"
      />

    </RoleSuperAdmin>
  );
};

export { ServiceDeleteButton };
