import { Link } from 'react-router-dom';

export const NewServiceButton = () => {
  return (
    <Link
      to="/servicios/nuevo"
      className="btn-add d-flex justify-content-center align-items-center"
    >
      <span class="material-icons-outlined me-2">add_circle_outline</span>
      Nuevo servicio
    </Link>
  );
};
