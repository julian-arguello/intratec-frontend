import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/Auth.Context';
import authRole from '../../../utils/auth.role';

function ProfileDetail() {
   const { state } = useAuth();

   return (
      <main>
         <h2 className="my-4 text-center text-sm-start">Perfil</h2>
         <ul className="profile-card row p-0 py-4 rounded-4">
            <li className="col-12 d-flex flex-column justify-content-between mb-3">
               <div className="d-flex flex-column align-items-center justify-content-center">
                  <span className="material-icons-outlined name">
                     account_circle
                  </span>
                  <span className="fw-bold">
                     {state.user.name + ' ' + state.user.lastname}
                  </span>
               </div>
            </li>
            <hr></hr>
            <li className="col-12 d-flex flex-column justify-content-between mb-3">
               <div className="d-flex align-items-center justify-content-center">
                  <span className="material-icons-outlined me-2">
                     manage_accounts
                  </span>
                  <span>{authRole(state.user.role.role_name)}</span>
               </div>
            </li>
            <li className="col-12 d-flex flex-column justify-content-between mb-3">
               <div className="d-flex align-items-center justify-content-center">
                  <span className="material-icons-outlined me-2">email</span>
                  <span>{state.user.email}</span>
               </div>
            </li>
            <li className="d-flex justify-content-center">
               <Link
                  to={`/perfil/editar/${state.user._id}`}
                  className="btn-edit d-flex justify-content-center align-items-center"
               >
                  <span className="material-icons-outlined me-2">edit</span>
                  Editar
               </Link>
            </li>
         </ul>
      </main>
   );
}
export default ProfileDetail;
