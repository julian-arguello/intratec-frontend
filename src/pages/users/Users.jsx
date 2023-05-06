import UserCreateForm from '../../components/users/UserCreateForm';
import UserList from '../../components/users/UsersList';
import { useState, useEffect } from 'react';
import { useUser } from "../../context/User.Context";

export function Users(){

    const [section, setSection] = useState(0)

    function renderSwitch(param) {
      switch(param) {
        case 0:
          return <UserList />;
        case 1:
          return <UserCreateForm />;
      }
    }

    return (
        <main>
            <div className="col-12 col-sm-auto my-5">
              <h2 className='mt-5 mt-sm-0 text-center text-sm-start'>Usuarios</h2>
            </div>
            <button className={(section == 1 ? 'd-none' : 'active btn-add d-flex justify-content-center align-items-center')} onClick={()=>(setSection(1))}> 
              <span className="icon-agregar me-2 f-20"></span>Nuevo usuario
            </button>
            <button className={(section == 0 ? 'd-none' : 'btn-back position-edit-back text-center me-sm-3')} onClick={()=>(setSection(0))}>
              <span className="icon-atras f-20 me-2"></span>Atrás
            </button>
            <div>
                {renderSwitch(section)}
            </div>
        </main>
    )
}
export default Users