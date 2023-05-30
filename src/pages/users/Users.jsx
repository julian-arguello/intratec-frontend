import UserCreateForm from '../../components/users/UserCreateForm';
import UserList from '../../components/users/UsersList';
import { useState, useEffect } from 'react';
import { useUser } from '../../context/User.Context';
import { NewUserButton } from '../../components/buttons/NewUserButton';

export function Users() {
  const [section, setSection] = useState(0);

  function renderSwitch(param) {
    switch (param) {
      case 0:
        return <UserList />;
      case 1:
        return <UserCreateForm />;
    }
  }

  return (
    <main>
      <div className="col-12 col-sm-auto my-5">
        <h2 className="mt-5 mt-sm-0 text-center text-sm-start">
          {section == 1 ? 'Crear usuario' : 'Usuarios'}
        </h2>
      </div>
      <NewUserButton section={section} setSection={setSection} />
      <button
        className={
          section == 0
            ? 'd-none'
            : 'btn-back position-edit-back text-center me-sm-3'
        }
        onClick={() => setSection(0)}
      >
        <span className="icon-atras f-20 me-2"></span>Atrás
      </button>
      <div>{renderSwitch(section)}</div>
    </main>
  );
}
export default Users;
