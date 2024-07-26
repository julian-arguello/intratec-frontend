import { Link } from 'react-router-dom';
import authRole from '../../utils/auth.role';

export function UserItem(props) {
   return (
      <div className="col">
         <div className="card border-0 text-white">
            <div className="card-header p-4">
               <h3 className="h4 mb-0">
                  {props.user.name} {props.user.lastname}
               </h3>
            </div>
            <div className="card-body p-4">
               <ul className="p-0 m-0 mb-4">
                  <li className="d-flex align-items-center mb-3">
                     <span className="material-icons-outlined me-2">email</span>
                     <h4 className="h6 card-title mb-0">{props.user.email}</h4>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                     <span className="material-icons-outlined me-2">
                        manage_accounts
                     </span>
                     <h4 className="h6 card-title mb-0">
                        {authRole(props.user.role.role_name)}
                     </h4>
                  </li>
                  <li className="d-flex align-items-center">
                     <span className="material-icons-outlined me-2">lock</span>
                     <h4 className="h6 card-title mb-0">
                        {props.user.softDelete === 'false'
                           ? 'activo'
                           : 'inactivo'}
                     </h4>
                  </li>
               </ul>
               <div className="d-flex justify-content-end align-items-center">
                  <Link
                     to={`/usuarios/editar/${props.user._id}`}
                     className="btn d-flex align-items-center text-white border px-3 py-2 rounded-4"
                  >
                     <span className="material-icons-outlined me-2">edit</span>
                     Editar
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
export default UserItem;
