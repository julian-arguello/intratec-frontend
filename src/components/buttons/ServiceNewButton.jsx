import { Link } from "react-router-dom";
import { RoleAdmin } from "../authRole/RoleAdmin";
import { TbCopyPlus } from "react-icons/tb";
import { FaRegSquarePlus } from "react-icons/fa6";


export const ServiceNewButton = ( {className} ) => {
  return (
    <RoleAdmin >
      <Link to="/servicios/nuevo" className={`btn btn-primary d-flex align-items-center align-items-center ${className}`}>
       <FaRegSquarePlus/> <span className="m-0 ms-2">Nuevo Servicio</span>
      </Link>
    </RoleAdmin>
  );
};
