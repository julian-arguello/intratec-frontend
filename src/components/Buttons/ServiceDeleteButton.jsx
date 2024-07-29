import { useState } from "react";
import { RoleSuperAdmin } from "../authRole/RoleSuperAdmin";
import { MdOutlineDelete } from "react-icons/md";
import { CustomModal } from "../UI/CustomModal/CustomModal";
import { useService } from "../../context/Service.Context";
import { useNotify } from "../../context/Notify.Context";
import { useNavigate } from "react-router-dom";
import { Loader } from "../UI/Loader/Loader";

const ServiceDeleteButton = ({ service, className }) => {
  let navigate = useNavigate();
  const { delService } = useService();
  const [showModal, setShowModal] = useState(false);
  const { notify } = useNotify();
  const [loading, setLoading] = useState(false);


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const remove = () => {
    setLoading(true);
    delService(service._id).then((res) => {
      setLoading(false);
      if (res.status === 'success') {
        notify(res.msg, 'success');
        navigate('/servicios');
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
        confirmText={loading ? <Loader/> : "Eliminar"}
        classNameBtnOk={"btnActionModal"}
        disabledBtnOk={loading}
        cancelText="Cancelar"
      >
        {`¿Estás seguro de que deseas eliminar el servicio Nº ${service.service_id} de ${service.client.name_busines}?`}
      </CustomModal>
    </RoleSuperAdmin>
  );
};

export { ServiceDeleteButton };
