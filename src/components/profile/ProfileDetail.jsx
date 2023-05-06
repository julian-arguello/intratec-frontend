import { useAuth } from '../../context/Auth.Context';
import { useUser } from '../../context/User.Context';
import authRole from '../../services/auth.role';
import ProfileEdit from './ProfileEdit';

function ProfileDetail(){

    const { state } = useAuth();
    const  user = useUser();
    
    function toggleEditForm() {
        let edit = document.getElementById("editForm");
        edit.classList.toggle("closeEditForm");
    }
 
    return(        
        <main>
            <h2 className='my-5 text-center text-sm-start'>Perfil de {authRole(state.user.role.role_name)}</h2>
            <button className="btn-add btn-edit d-flex justify-content-center align-items-center" onClick={ toggleEditForm }>                   
                <span className="icon-editar me-2 f-20"></span>Editar
            </button>
            <ul className='row ps-0'>
                <li className="col-12 col-sm-3 d-flex flex-column justify-content-between mb-5 mb-sm-0">
                    <h3 className='h4 mb-3 text-center text-sm-start'>Nombre</h3>
                    <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                        <span className='icon-perfil me-2 f-30'></span>
                        <span>{state.user.name + " " + state.user.lastname}</span> 
                        {console.log("user",state.user._id)}
                    </div>
                </li>
                <li className="col-12 col-sm-3 d-flex flex-column justify-content-between mb-5 mb-sm-0">
                    <h3 className='h4 mb-3 text-center text-sm-start'>Rol</h3>
                    <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                        <span className='icon-usuario me-2 f-30'></span>
                        <span>{state.user.role.role_name}</span>
                    </div>
                </li>
                <li className="col-12 col-sm-3 d-flex flex-column justify-content-between mb-5 mb-sm-0">
                    <h3 className='h4 mb-3 text-center text-sm-start'>Correo</h3>
                    <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                        <span className='icon-mail f-30 me-2'></span>
                        <span>{state.user.email}</span>
                    </div>
                </li>
            </ul>  
            <div id='editForm' className='closeEditForm'>
                <ProfileEdit 
                    function = {toggleEditForm}
                />
            </div> 
        </main>
    )
} 
export default ProfileDetail;