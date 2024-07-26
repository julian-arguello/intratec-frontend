import UserList from '../../components/users/UsersList';
import { NewUserButton } from '../../components/buttons/NewUserButton';
import { RoleAdmin } from '../../components/authRole/RoleAdmin';

import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { Search } from '../../components/UI/Search/Search';

import styles from "./Users.module.scss";

export function Users() {
   return (
      // <>
      //    <main>
      //       <div className="row justify-content-between align-items-center mb-5 mt-3">
      //          <h2 className="text-center text-lg-start h3 mb-0 order-1 order-lg-0 col-12 col-lg-6">
      //             Usuarios
      //          </h2>
      //       </div>
      //       <div className="col-12 col-sm-auto">
      //          <RoleAdmin>
      //             <NewUserButton />
      //          </RoleAdmin>
      //       </div>
      //       <UserList />
      //    </main>
      // </>

      <section className="d-flex flex-column w-100">
      <Navbar>
        <Search
          initialValues={{ search: "" }}
         //  validationSchema={schemaSearch}
         //  onSubmit={(data) => {
         //    clientSearch(data.search);
         //  }}
         placeholder="Nombre o Correo electrónico"
          className="m-auto"
        />

        {/* <ClientNewButton /> */}
      </Navbar>

      <main className={styles.main}>
        <UserList />
      </main>

    </section>


   );
}
export default Users;
