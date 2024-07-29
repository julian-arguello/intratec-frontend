import { Link } from "react-router-dom";
import { RoleAdmin } from "../authRole/RoleAdmin";

import { TbCopyPlus } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";



const ClientNewButton = ( {className} ) => {
  return (
    <RoleAdmin>
      <Link
        to="/clientes/nuevo"
        className={`btn btn-success d-flex align-items-center align-items-center ${className}`}
      >
        <TbUsersGroup /> <span className="m-0 ms-2">Nuevo Cliente</span>
      </Link>
    </RoleAdmin>
  );
};

export { ClientNewButton }
