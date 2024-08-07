import { useState } from "react";
import { RoleAdmin } from "../authRole/RoleAdmin";
import { MdOutlineDelete } from "react-icons/md";
import { CustomModal } from "../UI/CustomModal/CustomModal";
import { useService } from "../../context/Service.Context";
import { useNotify } from "../../context/Notify.Context";
import { useNavigate } from "react-router-dom";
import { Loader } from "../UI/Loader/Loader";
import { MdClear } from "react-icons/md";

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
    <RoleAdmin>
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
        {`¿Estás seguro de que deseas eliminar el servicio Nº ${service.service_id} de ${service.client.name_busines}?`}
      </CustomModal>
    </RoleAdmin>
  );
};

export { ServiceDeleteButton };
