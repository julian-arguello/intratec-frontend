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
        <div className="row justify-content-between align-items-center mb-5 mt-3">
           <h2 className="text-center text-lg-start h3 mb-0 order-1 order-lg-0 col-12 col-lg-6">
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
                 <Form className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end order-0 order-lg-1 mb-5 mb-lg-0">
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
