import { Link } from "react-router-dom";
import { RoleSuperAdmin } from "../authRole/RoleSuperAdmin";
import { FaRegEdit } from "react-icons/fa";

const UserEditButton = ( {user, className} ) => {
  return (
    <RoleSuperAdmin>
      <Link
        to={`/usuarios/editar/${user._id}`}
        className={`btn btn-primary d-flex align-items-center align-items-center ${className}`}
      >
        <FaRegEdit /> <span className="m-0 ms-2">Editar</span>
      </Link>
    </RoleSuperAdmin>

  );
};

export { UserEditButton }

