import { useState } from 'react';
import { RoleAdmin } from "../../authRole/RoleAdmin";
import { CustomModal } from '../../UI/CustomModal/CustomModal';
import { ClientFormNew } from '../../client/ClientFormNew'; 
import { TbUsersGroup } from "react-icons/tb";
import { useClient } from '../../../context/Client.Context';
import { useNotify } from '../../../context/Notify.Context';
import { Loader } from '../../UI/Loader/Loader';
import { MdClear } from "react-icons/md";

export const ClientNewButton = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const { addClient } = useClient();
  const { notify } = useNotify();
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async (client) => {
    setLoading(true);
    try {
      client.create_at = new Date();
      client.softDelete = false;
  
      const res = await addClient(client);
      setLoading(false);
  
      if (res.status === 'success') {
        notify(res.msg, 'success');
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
        <TbUsersGroup /> <span className="m-0 ms-2">Nuevo Cliente</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Nuevo Cliente"
        onConfirm={() => document.getElementById('new-client-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
        confirmText={loading ? <Loader /> : (<><TbUsersGroup /> <span className="m-0 ms-2">Crear</span></>)}
        classNameBtnOk={"btnActionModal btn-success"}
        disabledBtnOk={loading}
        confirmVariant="primary"
        className={"m-0 p-0"}
      >
        <ClientFormNew
          onSubmit={handleSubmit}
        />
      </CustomModal>
    </RoleAdmin>
  );
};
