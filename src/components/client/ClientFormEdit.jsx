import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useClient } from '../../context/Client.Context';
import { schemaClientRegister } from '../../utils/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';
import Loading from '../Loading';
import { ConfirmButton } from '../Buttons/ConfirmButton';

export function ClientFormEdit() {
   const navigate = useNavigate();
   const { state, editClient, findClientId } = useClient();
   const { id } = useParams();
   const { notify } = useNotify();
   const [loading, setloading] = useState(true);

   useEffect(() => {
      findClientId(id).then(() => {
         setloading(false);
      });
   }, []);

   const initialValues = {
      name_busines: state.client.name_busines,
      cuit_cuil: state.client.cuit_cuil,
      phone: state.client.phone,
      email: state.client.email,
   };

   const handleSubmit = (client) => {
      client._id = state.client._id;
      client.create_at = new Date();
      client.softDelete = false;
      editClient(client).then((res) => {
         notify(res);
         navigate('/clientes');
      });
   };

   if (loading) {
      return <Loading />;
   }

   return (
      <Formik
         /*--------------------*/
         initialValues={initialValues}
         /*--------------------*/
         validationSchema={schemaClientRegister}
         /*--------------------*/
         onSubmit={handleSubmit}
         /*--------------------*/
      >
         {({ errors, touched }) => (
            <Form>
               <div className="row mb-4">
                  <div className="col-sm-4">
                     <label className="form-label w-100">
                        Nombre del Cliente
                        <Field
                           type="text"
                           className="form-control"
                           name="name_busines"
                           id="name_busines"
                        />
                        <ErrorMessage
                           name="name_busines"
                           component={() => (
                              <span className="validateErrors">
                                 {errors.name_busines}
                              </span>
                           )}
                        />
                        {!(errors.name_busines && touched.name_busines) && (
                           <div className="form-text m-0">
                              Ingrese el nombre (mínimo 3 caracteres)
                           </div>
                        )}
                     </label>
                  </div>
                  <div className="col-sm-4 mb-4 mb-sm-0">
                     <label className="form-label w-100">
                        Cuit / Cuil
                        <Field
                           type="number"
                           className="form-control"
                           name="cuit_cuil"
                        />
                        <ErrorMessage
                           name="cuit_cuil"
                           component={() => (
                              <span className="validateErrors">
                                 {errors.cuit_cuil}
                              </span>
                           )}
                        />
                        {!(errors.cuit_cuil && touched.cuit_cuil) && (
                           <div className="form-text m-0">
                              Ingrese el cuit/cuil (11 caracteres numéricos)
                           </div>
                        )}
                     </label>
                  </div>
               </div>

               <div className="row mb-4">
                  <div className="col-sm-4">
                     <label className="form-label w-100">
                        Teléfono
                        <Field
                           type="number"
                           className="form-control"
                           name="phone"
                        />
                        <ErrorMessage
                           name="phone"
                           component={() => (
                              <span className="validateErrors">
                                 {errors.phone}
                              </span>
                           )}
                        />
                        {!(errors.phone && touched.phone) && (
                           <div className="form-text m-0">
                              Ingrese el teléfono (mínimo 8 caracteres
                              numéricos)
                           </div>
                        )}
                     </label>
                  </div>
                  <div className="col-sm-4">
                     <label className="form-label w-100">
                        Correo electrónico
                        <Field
                           type="email"
                           className="form-control"
                           name="email"
                        />
                        <ErrorMessage
                           name="email"
                           component={() => (
                              <span className="validateErrors">
                                 {errors.email}
                              </span>
                           )}
                        />
                        {!(errors.email && touched.email) && (
                           <div className="form-text m-0">
                              Ingrese el email (ej: tu_correo@mail.com)
                           </div>
                        )}
                     </label>
                  </div>
               </div>
               <ConfirmButton />
            </Form>
         )}
      </Formik>
   );
}
export default ClientFormEdit;
