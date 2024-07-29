import { Link } from "react-router-dom";
import { RoleAdmin } from "../authRole/RoleAdmin";
import { PiCardsBold } from "react-icons/pi";


const ClientAssociatedServicesButton = ( {clientId, acative,  className} ) => {
  return (
    <RoleAdmin>
      <Link
        to={`/clientes/servicios/${clientId}`}
        className={`btn btn-secondary d-flex align-items-center align-items-center ${className}`}
      >
        <PiCardsBold /> <span className="m-0 ms-2">Servicios</span>
      </Link>
    </RoleAdmin>
  );
};

export { ClientAssociatedServicesButton }
