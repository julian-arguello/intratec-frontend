import UserCreateForm from '../../components/users/UserCreateForm';
import UserList from '../../components/users/UsersList';
import { useState, useEffect } from 'react';
import { useUser } from '../../context/User.Context';
import { NewUserButton } from '../../components/buttons/NewUserButton';
import { RoleAdmin } from '../../components/authRole/RoleAdmin';

export function Users() {
   return (
      <>
         <main>
            <div className="row justify-content-between align-items-center mb-5 mt-3">
               <h2 className="text-center text-lg-start h3 mb-0 order-1 order-lg-0 col-12 col-lg-6">
                  Usuarios
               </h2>
            </div>
            <div className="col-12 col-sm-auto">
               <RoleAdmin>
                  <NewUserButton />
               </RoleAdmin>
            </div>
            <UserList />
         </main>
      </>
   );
}
export default Users;
