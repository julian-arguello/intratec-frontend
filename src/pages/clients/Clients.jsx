import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useClient } from '../../context/Client.Context';
import ClientList from '../../components/client/ClientList';
import Loading from '../../components/Loading';
import RoleAdmin from '../../components/authRole/RoleAdmin';
import { NewClientButton } from '../../components/buttons/NewClientButton';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaSearch } from '../../services/validate';


function Clients(props) {
  //const { state, findClient } = useClient();
  const { findClient, clientSearch } = useClient();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    findClient().then(() => setLoading(false));
  }, []);

  return (
     <main>
        <div className="search-container">
           <h2 className="text-center text-lg-start h3 mb-0 search-container-title">
              Clientes
           </h2>
           <Formik
              /*--------------------*/
              initialValues={{
                 search: '',
              }}
              /*--------------------*/
              validationSchema={schemaSearch}
              /*--------------------*/
              onSubmit={(data) => {
                 clientSearch(data.search);
              }}
           >
              {({ errors, touched }) => (
                 <Form className="d-flex">
                    <Field
                       type="search"
                       className="form-control search-input me-2"
                       name="search"
                       placeholder="Buscar Nombre o Cuil/Cuit"
                    />
                    <ErrorMessage
                       name="search"
                       component={() => (
                          <div className="validateErrors loginText">
                             {errors.search}
                          </div>
                       )}
                    />
                    <button
                       type="submit"
                       className="btn btn-outline-primary d-flex align-items-center"
                    >
                       <span className="material-icons-outlined">search</span>
                    </button>
                 </Form>
              )}
           </Formik>
        </div>
        <RoleAdmin>
           <NewClientButton />
        </RoleAdmin>
        {loading ? <Loading /> : <ClientList />}
     </main>
  );
}
export default Clients;
