import { Link } from "react-router-dom";
import { RoleAdmin } from "../authRole/RoleAdmin";
import { FaRegEdit } from "react-icons/fa";

const ClientEditButton = ( {client, className} ) => {
  return (
    <RoleAdmin>
      <Link
        to={`/clientes/editar/${client._id}?clientName=${client.name_busines}`}
        className={`btn btn-primary d-flex align-items-center align-items-center ${className}`}
      >
        <FaRegEdit /> <span className="m-0 ms-2">Editar</span>
      </Link>
    </RoleAdmin>
  );
};

export { ClientEditButton }

