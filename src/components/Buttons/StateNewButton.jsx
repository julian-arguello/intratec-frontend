import { useState } from "react";
import { RoleAdmin } from "../authRole/RoleAdmin";
import { CustomModal } from "../UI/CustomModal/CustomModal";
import { useService } from "../../context/Service.Context";
import { useNotify } from "../../context/Notify.Context";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { StateAddForm } from "../service/ServiceDetail/StateAddForm/StateAddForm";
import { Loader } from "../UI/Loader/Loader";

const stateTransitions = {
  Recepcionado: ["Revisado", "Sin reparación", "Devuelto"],
  Revisado: ["Reparado", "Devuelto"],
  Reparado: ["Devuelto"],
  "Sin reparación": ["Devuelto"],
};

const StateNewButton = ({ service, className }) => {
  const { addServiceState } = useService();
  const [showModal, setShowModal] = useState(false);
  const { notify } = useNotify();
  const isDisabled = service.state === "Devuelto";
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const createState = async (values) => {
    setLoading(true);
    try {
      const res = await addServiceState(
        service._id,
        values.state,
        values.description
      );
      setLoading(false);
      if (res.status === "success") {
        notify("Estado agregado correctamente");
      } else {
        notify("error");
      }
      handleClose();
    } catch (err) {
      setLoading(false);
      notify("Error al agregar el estado");
      handleClose();
    }
  };

  const availableStates = stateTransitions[service.state] || [];

  return (
    <RoleAdmin>
      <button
        onClick={handleShow}
        className={`btn btn-success d-flex align-items-center align-items-center ${className}`}
        disabled={isDisabled}
      >
        <FaRegSquarePlus /> <span className="m-0 ms-2">Nuevo Estado</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Crear Nuevo Estado"
        onConfirm={() =>
          document
            .getElementById("create-state-form")
            .dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            )
        }
        confirmText={
          loading ? (
            <Loader />
          ) : (
            <>
              <FaRegSquarePlus /> <span className="m-0 ms-2">Crear</span>
            </>
          )
        }
        classNameBtnOk={"btnActionModal"}
        disabledBtnOk={loading}
        confirmVariant="primary"
      >
        <StateAddForm
          availableStates={availableStates}
          onSubmit={createState}
        />
      </CustomModal>
    </RoleAdmin>
  );
};

export { StateNewButton };
