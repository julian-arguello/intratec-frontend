import { Link } from "react-router-dom";
import { RoleAdmin } from "../../components/authRole/RoleAdmin";
import { TbCopyPlus } from "react-icons/tb";

export const NewServiceButton = ( {className}) => {
  return (
    <RoleAdmin >
      <Link to="/servicios/nuevo" className={`btn btn-primary d-flex align-items-center align-items-center ${className}`}>
       <TbCopyPlus/> <span className="m-0 ms-2">Nuevo Servicio</span>
      </Link>
    </RoleAdmin>
  );
};
