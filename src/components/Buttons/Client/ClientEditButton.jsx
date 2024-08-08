import { useState } from 'react';
import { RoleAdmin } from "../../authRole/RoleAdmin";
import { CustomModal } from '../../UI/CustomModal/CustomModal';
import { ClientFormEdit } from '../../../components/client/ClientFormEdit';
import { useClient } from '../../../context/Client.Context';
import { useNotify } from '../../../context/Notify.Context';
import { Loader } from '../../UI/Loader/Loader';
import { MdClear } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ClientEditButton = ({ client, className }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { editClient } = useClient();
  const { notify } = useNotify();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      values._id = client._id;
  
      const res = await editClient(values);
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
        className={`btn btn-primary d-flex align-items-center ${className}`}
      >
        <FaRegEdit /> <span className="m-0 ms-2">Editar</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Editar Cliente"
        onConfirm={() => document.getElementById('edit-client-form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
        confirmText={loading ? <Loader /> : (<><FaRegEdit /> <span className="m-0 ms-2">Editar</span></>)}
        classNameBtnOk={"btnActionModal"}
        disabledBtnOk={loading}
        confirmVariant="primary"
        className={"m-0 p-0"}
      >
        <ClientFormEdit
          initialValues={{
            name_busines: client.name_busines,
            cuit_cuil: client.cuit_cuil,
            phone: client.phone,
            email: client.email,
          }}
          onSubmit={handleSubmit}
        />
      </CustomModal>
    </RoleAdmin>
  );
};

export { ClientEditButton };
