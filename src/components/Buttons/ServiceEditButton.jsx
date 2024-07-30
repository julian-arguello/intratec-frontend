import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RoleAdmin } from "../authRole/RoleAdmin";
import { CustomModal } from "../UI/CustomModal/CustomModal";
import { useService } from "../../context/Service.Context";
import { useNotify } from "../../context/Notify.Context";
import { FaRegEdit } from "react-icons/fa";
import { ServiceFormEdit } from "../../components/service/ServiceDetail/ServiceEditForm/ServiceEditForm"; // Asegúrate de ajustar la ruta del archivo
import { Loader } from "../UI/Loader/Loader";
import { MdClear } from "react-icons/md";

export const ServiceEditButton = ({ service, className }) => {
  const [showModal, setShowModal] = useState(false);
  const { editService } = useService();
  const { notify } = useNotify();
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleUpdate = async (values) => {
    setLoading(true);
    try {
      values._id = service._id;
      const res = await editService(values);
      setLoading(false);
      if (res.status === "success") {
        notify("Servicio actualizado correctamente");
      } else {
        notify("Error al actualizar el servicio");
      }
      handleClose();
    } catch (err) {
      setLoading(false);
      notify("Error al actualizar el servicio");
      handleClose();
    }
  };

  return (
    <RoleAdmin>
      <button
        onClick={handleShow}
        className={`btn btn-primary d-flex align-items-center align-items-center ${className}`}
      >
        <FaRegEdit /> <span className="m-0 ms-2">Editar</span>
      </button>

      <CustomModal
        show={showModal}
        handleClose={handleClose}
        title="Editar Servicio"
        onConfirm={() =>
          document
            .getElementById("edit-service-form")
            .dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            )
        }
        confirmText={
          loading ? (
            <Loader />
          ) : (
            <>
              <FaRegEdit /> <span className="m-0 ms-2">Editar</span>
            </>
          )
        }
        classNameBtnOk={"btnActionModal"}
        disabledBtnOk={loading}
        cancelText={
          <>
            <MdClear /> <span className="m-0 ms-2">Cancelar</span>
          </>
        }
        confirmVariant="primary"
      >
        <ServiceFormEdit
          initialValues={{
            client_id: service.client_id,
            model: service.model,
            brand: service.brand,
            serial_number: service.serial_number,
          }}
          onSubmit={handleUpdate}
        />
      </CustomModal>
    </RoleAdmin>
  );
};
