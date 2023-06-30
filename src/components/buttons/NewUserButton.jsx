import { Link } from 'react-router-dom';

export const NewUserButton = (props) => {
   return (
      <Link
         to={'/usuarios/nuevo'}
         className="btn-add d-flex justify-content-center align-items-center"
      >
         <span className="material-icons-outlined me-2">
            add_circle_outline
         </span>
         Nuevo usuario
      </Link>
   );
};
