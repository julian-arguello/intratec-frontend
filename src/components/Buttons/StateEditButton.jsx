import { useState } from 'react';
import { RoleAdmin } from '../authRole/RoleAdmin';
import { CustomModal } from '../UI/CustomModal/CustomModal';
import { useService } from '../../context/Service.Context';
import { useNotify } from '../../context/Notify.Context';
import { StateEditForm } from "../service/ServiceDetail/StateEditForm/StateEditForm";
import { parseISO, formatISO } from 'date-fns';
import { FaRegEdit } from "react-icons/fa";
import { Loader } from '../UI/Loader/Loader';
import { MdClear } from "react-icons/md";

const StateEditButton = ({ service, stateInfo, state, className }) => {
  const { updateServiceState } = useService();
  const [showModal, setShowModal] = useState(false);
  const { notify } = useNotify();
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const editState = async (values) => {
    setLoading(true);
    try {
      // Convertir la fecha del formato 'yyyy-MM-ddTHH:mm' al formato ISO 8601
      const formattedDate = formatISO(parseISO(values.date));
      const res = await updateServiceState(service._id, state, formattedDate, values.description );
      setLoading(false);
      if (res.status === 'success') {
        notify('Estado actualizado correctamente');
      } else {
        notify(res.msg, "error");
      }
      handleClose();
    } catch (err) {
      setLoading(false);
      notify('Error al actualizar el estado');
      handleClose();
    }
  };

  return (
    <RoleAdmin>
      <button
        onClick={handleShow}
        className={`btn btn-primary d-flex align-items-center ${className}`}
      >
        <FaRegEdit /> <span className="m-0 ms-2">Editar</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Editar Estado"
        onConfirm={() => document.getElementById('edit-state-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
        classNameBtnOk={"btnActionModal"}
        confirmText={loading ? <Loader /> : (<><FaRegEdit /> <span className="m-0 ms-2">Editar</span></>)}
        disabledBtnOk={loading}
        cancelText={<div className="d-flex align-items-around align-items-center"><MdClear /> <span className="m-0 ms-1">Cancelar</span></div>}
        confirmVariant="primary"
      >
        <StateEditForm stateInfo={stateInfo} onSubmit={editState} service={service} state={state}/>
      </CustomModal>
    </RoleAdmin>
  );
};

export { StateEditButton };
