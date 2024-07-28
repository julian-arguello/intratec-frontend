import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const BackButton = ({ to, className }) => {
  return (
      <Link
        to={to}
        className={`btn btn-secondary d-flex align-items-center align-items-center ${className}`}
      >
        <IoChevronBackOutline /> <span className="m-0 ms-2">Atrás</span>
      </Link>
  );
};

export { BackButton };