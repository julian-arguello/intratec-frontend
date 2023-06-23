import { Link } from 'react-router-dom';

export const NewClientButton = () => {
  return (
     <Link
        to={'/clientes/nuevo'}
        className="btn-add d-flex justify-content-center align-items-center"
     >
        <span className="material-icons-outlined me-2">add_circle_outline</span>
        Nuevo cliente
     </Link>
  );
};
