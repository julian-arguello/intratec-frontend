import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoleAdmin } from "../authRole/RoleAdmin";
import { CustomModal } from '../UI/CustomModal/CustomModal';
import { ServiceFormNew } from '../../components/service/ServiceFormNew/ServiceFormNew';
import { FaRegSquarePlus } from "react-icons/fa6";
import { useClient } from '../../context/Client.Context';
import { useService } from '../../context/Service.Context';
import { useAuth } from '../../context/Auth.Context';
import { useNotify } from '../../context/Notify.Context';
import { Loader } from '../UI/Loader/Loader';

export const ServiceNewButton = ({ className, clientId = false }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { state, findClient } = useClient();
  const { addService } = useService();
  const auth = useAuth();
  const { notify } = useNotify();
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    findClient(); 
    setShowModal(true);
  };

  const handleSubmit = async (service) => {
    setLoading(true);
    try {
      service.state = 'Recepcionado';
      service.create_at = new Date();
      service.user_id = auth.state.user._id;
      service.softDelete = false;
  
      const res = await addService(service);
      setLoading(false);
  
      if (res.status === 'success') {
        notify(res.msg, 'success');
        navigate('/servicios');
      } else {
        notify(res.msg, 'error');
      }
    } catch (error) {
      setLoading(false);
      notify("Ocurrió un error inesperado. Inténtalo de nuevo.", 'error');
    } finally {
      handleClose();
    }
  };
  
  return (
    <RoleAdmin>
      <button
        onClick={handleShow}
        className={`btn btn-success d-flex align-items-center ${className}`}
      >
        <FaRegSquarePlus /> <span className="m-0 ms-2">Nuevo Servicio</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Nuevo Servicio"
        onConfirm={() => document.getElementById('new-service-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
        confirmText={loading ? <Loader /> : (<><FaRegSquarePlus /> <span className="m-0 ms-2">Crear</span></>)}
        classNameBtnOk={"btnActionModal btn-success"}
        disabledBtnOk={loading}
        confirmVariant="primary"
        className={"m-0 p-0"}
      >
        <ServiceFormNew
          state={state}
          clientId={clientId}
          onSubmit={handleSubmit}
        />
      </CustomModal>
    </RoleAdmin>
  );
};
