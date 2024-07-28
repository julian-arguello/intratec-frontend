import { Link } from "react-router-dom";
import { RoleAdmin } from "../authRole/RoleAdmin";
import { FaRegEdit } from "react-icons/fa";


export const ServiceEditButton = ( { serviceId, className} ) => {
  return (
    <RoleAdmin >
      <Link to={`/servicios/editar/${serviceId}`}className={`btn btn-primary d-flex align-items-center align-items-center ${className}`}>
       <FaRegEdit/> <span className="m-0 ms-2">Editar</span>
      </Link>
    </RoleAdmin>
  );
};
