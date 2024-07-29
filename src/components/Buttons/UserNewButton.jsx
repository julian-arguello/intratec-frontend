import { Link } from "react-router-dom";
import { RoleSuperAdmin } from "../authRole/RoleSuperAdmin";
import { TbUsers } from "react-icons/tb";

const UserNewButton = ({ className }) => {
  return (
    <RoleSuperAdmin>
      <Link
        to={"/usuarios/nuevo"}
        className={`btn btn-success d-flex align-items-center align-items-center ${className}`}
      >
        <TbUsers /> <span className="m-0 ms-2">Nuevo usuario</span>
      </Link>
    </RoleSuperAdmin>
  );
};

export { UserNewButton };
