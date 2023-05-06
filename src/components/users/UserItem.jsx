import authRole from "../../services/auth.role";
import UserEditForm from "./UserEditForm";
import { useState } from 'react';
export function UserItem(props){

    const [edit, setEdit] = useState(false)

    return(
        <div className="col">
            <div className="card text-white bg-black p-sm-5 rounded-4">

                {!edit ? 
                    (<ul className='p-0 mb-3'>
                        <li className='d-flex align-items-center mb-2'>
                            <span className="icon-perfil me-3 f-30"></span>
                            {props.user.name} {props.user.lastname}
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <span className="icon-mail me-3 f-30"></span>
                            {props.user.email}
                        </li>
                        <li className='d-flex align-items-center mb-2'>
                            <span className="icon-usuario me-3 f-30"></span>
                            {authRole(props.user.role.role_name)}
                        </li>
                        <li className='d-flex align-items-center'>
                            <span className="icon-estado me-3 f-30"></span>
                            {props.user.softDelete == "false" ? 'activo' : 'desactivado'}
                        </li>
                    </ul>) : <UserEditForm user={props.user}/>
                }
                    <button 
                        className={"rounded-4 text-white d-flex align-items-center justify-content-center px-3 py-2 " + (!edit ? 'box-proceso align-self-end' : 'box-sinreparacion align-self-start position-absolute top-0 start-0') } onClick={()=>(!edit  ? setEdit(true) : setEdit(false))}>
                        <span className={ 
                            !edit ? 'icon-editar me-2 f-20' : 'icon-cancelar f-20'
                        }>
                        </span>
                        {!edit ? 'Editar' : ''}
                    </button>

            </div>
        </div>
    )
}
export default UserItem