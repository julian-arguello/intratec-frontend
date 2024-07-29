import { Link } from "react-router-dom";
import { GrStatusInfo } from "react-icons/gr";

export const ServiceDetailsButton = (props) => {
  return (
    <Link
      to={`/servicios/detalle/${props.id}`}
      className={`btn btn-secondary d-flex align-items-center align-items-center `}
    >
      <GrStatusInfo /> <span className="m-0 ms-2">Detalle</span>
    </Link>
  );
};
