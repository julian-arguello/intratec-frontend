import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context.jsx';
import { useUser } from '../../context/User.Context.jsx';
import { schemaUserUpdateSA } from '../../utils/validate.js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading.jsx';
import authRole from '../../utils/auth.role.js';
import { ConfirmButton } from '../Buttons/ConfirmButton.jsx';
import { BackButton } from '../Buttons/BackButton.jsx';

export function UserEditForm() {
   const navigate = useNavigate();
   const { id } = useParams();
   const { notify } = useNotify();
   const { state, editUser, findRole, findUserId } = useUser();
   const [loading, setloading] = useState(true);

   useEffect(() => {
      findUserId(id).then(() => {
         findRole().then(() => {
            setloading(false);
            console.log(state.user);
         });
      });
   }, []);

   if (loading) {
      return <Loading />;
   }

   return (
      <>
         <div className="row align-items-center mb-5 mt-3">
            <h2 className="col-6 col-md-4 text-end text-sm-start h3 order-1 order-md-0 mb-0">
               Editar datos de {state.user.name}
            </h2>
            <div className="col-6 col-md-4">
               <div className="float-md-end">
                  <BackButton refer={'/usuarios'} />
               </div>
            </div>
         </div>
         <Formik
            /*--------------------*/
            initialValues={{
               name: state.user.name,
               lastname: state.user.lastname,
               role_id: state.user.role_id,
               _id: state.user._id,
               softDelete: state.user.softDelete,
            }}
            /*--------------------*/
            validationSchema={schemaUserUpdateSA}
            /*--------------------*/
            onSubmit={(data) => {
               editUser(data, true).then((res) => {
                  notify(res);
                  navigate('/usuarios');
               });
            }}
            /*--------------------*/
         >
            {({ errors, touched }) => (
               <Form>
                  <div className="row mb-sm-4">
                     <div className="col-sm-4">
                        <label className="form-label w-100">
                           Rol *
                           <Field
                              className="form-select"
                              name="role_id"
                              as="select"
                           >
                              {state.roles.map((role) => (
                                 <option key={role._id} value={role._id}>
                                    {authRole(role.role_name)}
                                 </option>
                              ))}
                           </Field>
                           <ErrorMessage
                              name="role_id"
                              component={() => (
                                 <div className="validateErrors">
                                    *{errors.role_id}
                                 </div>
                              )}
                           />
                           {!(errors.role_id && touched.role_id) && (
                              <div className="form-text m-0">
                                 Seleccione el rol del usuario
                              </div>
                           )}
                        </label>
                     </div>
                     <div className="col-sm-4">
                        <label className="form-label w-100">
                           Estado *
                           <Field
                              className="form-select"
                              name="softDelete"
                              as="select"
                           >
                              <option value="false">Activo</option>
                              <option value="true">Inactivo</option>
                           </Field>
                           <ErrorMessage
                              name="softDelete"
                              component={() => (
                                 <div className="validateErrors">
                                    *{errors.softDelete}
                                 </div>
                              )}
                           />
                           {!(errors.softDelete && touched.softDelete) && (
                              <div className="form-text m-0">
                                 Seleccione el estado del usuario
                              </div>
                           )}
                        </label>
                     </div>
                  </div>
                  <div className="row mb-4">
                     <div className="col-sm-4">
                        <label className="form-label w-100">
                           Nombre *
                           <Field
                              type="text"
                              className="form-control"
                              name="name"
                           />
                           <ErrorMessage
                              name="name"
                              component={() => (
                                 <div className="validateErrors">
                                    {errors.name}
                                 </div>
                              )}
                           />
                           {!(errors.name && touched.name) && (
                              <div className="form-text m-0">
                                 {' '}
                                 Ingrese el nombre (mínimo 3 caracteres)
                              </div>
                           )}
                        </label>
                     </div>
                     <div className="col-sm-4">
                        <label className="form-label w-100">
                           Apellido *
                           <Field
                              type="text"
                              className="form-control"
                              name="lastname"
                           />
                           <ErrorMessage
                              name="lastname"
                              component={() => (
                                 <div className="validateErrors ">
                                    {errors.lastname}
                                 </div>
                              )}
                           />
                           {!(errors.lastname && touched.lastname) && (
                              <div className="form-text m-0">
                                 {' '}
                                 Ingrese el apellido (mínimo 3 caracteres)
                              </div>
                           )}
                        </label>
                     </div>
                  </div>
                  <ConfirmButton />
               </Form>
            )}
         </Formik>
      </>
   );
}
export default UserEditForm