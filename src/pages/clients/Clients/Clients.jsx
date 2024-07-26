import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useClient } from "../../../context/Client.Context";
import ClientList from "../../../components/client/ClientList/ClientList";
import Loading from "../../../components/Loading";
import { RoleAdmin } from "../../../components/authRole/RoleAdmin";
import { ClientNewButton } from "../../../components/buttons/ClientNewButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemaSearch } from "../../../utils/validate";

import { Search } from "../../../components/UI/Search/Search";
import { Navbar } from "../../../components/Layout/Navbar/Navbar";
import styles from "./Clients.module.scss"

const Clients = (props) => {
  //const { state, findClient } = useClient();
  const { findClient, clientSearch } = useClient();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    findClient().then(() => setLoading(false));
  }, []);

  return (
    //   <main>
    //      <div className="search-container">
    //         <h2 className="text-center text-lg-start h3 mb-0 search-container-title">
    //            Clientes
    //         </h2>
    //         <Formik
    //            /*--------------------*/
    //            initialValues={{
    //               search: '',
    //            }}
    //            /*--------------------*/
    //            validationSchema={schemaSearch}
    //            /*--------------------*/
    //            onSubmit={(data) => {
    //               clientSearch(data.search);
    //            }}
    //         >
    //            {({ errors, touched }) => (
    //               <Form className="d-flex">
    //                  <Field
    //                     type="search"
    //                     className="form-control search-input me-2"
    //                     name="search"
    //                     placeholder="Buscar Nombre o Cuil/Cuit"
    //                  />
    //                  <ErrorMessage
    //                     name="search"
    //                     component={() => (
    //                        <div className="validateErrors loginText">
    //                           {errors.search}
    //                        </div>
    //                     )}
    //                  />
    //                  <button
    //                     type="submit"
    //                     className="btn btn-outline-primary d-flex align-items-center"
    //                  >
    //                     <span className="material-icons-outlined">search</span>
    //                  </button>
    //               </Form>
    //            )}
    //         </Formik>
    //      </div>
    //      <RoleAdmin>
    //         <ClientNewButton />
    //      </RoleAdmin>
    //      {loading ? <Loading /> : <ClientList />}
    //   </main>

    <section className="d-flex flex-column w-100">
      <Navbar>
        <Search
          initialValues={{ search: "" }}
          validationSchema={schemaSearch}
          onSubmit={(data) => {
            clientSearch(data.search);
          }}
          placeholder="Nombre o Cuil/Cuit"
          className="m-auto"
        />

        <ClientNewButton />
      </Navbar>

      <main className={styles.main}>
        <ClientList />
      </main>

    </section>
  );
};
export { Clients };
