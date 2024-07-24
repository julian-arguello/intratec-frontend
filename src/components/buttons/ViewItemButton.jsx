import { Link } from 'react-router-dom';

import { GrStatusInfo } from "react-icons/gr";


export const ViewItemButton = (props) => {
  return (

      <Link to={`/servicios/${props.id}`} className={`btn btn-outline-primary btn-details d-flex align-items-center align-items-center `}>
         <GrStatusInfo/> <span className="m-0 ms-2">Detalle</span>
      </Link>
  );
};
