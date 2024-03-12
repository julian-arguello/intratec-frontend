import { useEffect, useState } from 'react';
import { useService } from '../../context/Service.Context';
import ServiceList from '../../components/service/ServiceList';
import Loading from '../../components/Loading';
import RoleAdmin from '../../components/authRole/RoleAdmin';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaSearch } from '../../services/validate';
import { NewServiceButton } from '../../components/buttons/NewServiceButton';

function Services() {
  const { findService, serviceSearch, filterState, serFilterState } = useService();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    findService().then(() => setLoading(false));
  }, []);

  return (
     <main>
      
        <div className="search-container">

            <h2 className="text-center text-lg-start h3 mb-0 search-container-title">
              Servicios
           </h2>

           <ul className='service-status-filter d-flex h6'>
               <li className='m-1 btn btn-warning' onClick={() => serFilterState("")}>Todos</li>
               <li className='m-1 btn box-recepcionados' onClick={() => serFilterState("Recepcionado")}>Recepcionado</li>
               <li className='m-1 btn box-proceso' onClick={() => serFilterState("Revisado")}>Revisado</li>
               <li className='m-1 btn box-reparados' onClick={() => serFilterState("Reparado")}>Reparado</li>
               <li className='m-1 btn box-sinreparacion' onClick={() => serFilterState("Sin reparación")}>Sin reparación</li>
            </ul>

           <Formik
              /*--------------------*/
              initialValues={{
                 search: '',
              }}
              /*--------------------*/
              validationSchema={schemaSearch}
              /*--------------------*/
              onSubmit={(data) => {
                 serviceSearch(data.search);
              }}
           >
              {({ errors, touched }) => (
                 <Form className="d-flex">
                    <Field
                       type="search"
                       className="form-control search-input me-2"
                       name="search"
                       placeholder="Buscar por cliente o n° de servicio"
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

        <div className="col-12 col-sm-auto">
           <RoleAdmin>
              <NewServiceButton />
           </RoleAdmin>
        </div>
        {loading ? <Loading /> : <ServiceList />}
     </main>
  );
}
export default Services;
