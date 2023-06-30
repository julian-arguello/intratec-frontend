import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';
import { useUser } from '../../context/User.Context';
import { schemaUserRegister } from '../../services/validate';
import { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Loading from '../Loading';
import authRole from '../../services/auth.role.js';
import { BackButton } from '../buttons/BackButton';
import { ConfirmButton } from '../buttons/ConfirmButton';

export function UserCreateForm() {
   const { notify } = useNotify();
   const { state, addUser, findRole } = useUser();
   const [loading, setloading] = useState(true);
   const [inputType, setinputType] = useState('password');

   useEffect(() => {
      findRole().then(() => {
         setloading(false);
      });
   }, []);

   function passwordView() {
      const input = document.getElementById('password');
      input.type === 'password'
         ? setinputType('text')
         : setinputType('password');
   }

   if (loading) {
      return <Loading />;
   }

   return (
      <>
         <div className="row align-items-center mb-5 mt-3">
            <h2 className="col-6 col-md-4 text-end text-sm-start h3 order-1 order-md-0 mb-0">
               Agregar Usuario
            </h2>
            <div className="col-6 col-md-4 order-0 order-md-1">
               <div className="float-md-end">
                  <BackButton />
               </div>
            </div>
         </div>
         <Formik
            /*--------------------*/
            initialValues={{
               email: '',
               name: '',
               lastname: '',
               role_id: '',
               password: '',
            }}
            /*--------------------*/
            validationSchema={schemaUserRegister}
            /*--------------------*/
            onSubmit={(data, { resetForm }) => {
               addUser(data).then((res) => {
                  notify(res);
                  resetForm();
               });
            }}
            /*--------------------*/
         >
            {({ errors, touched }) => (
               <Form>
                  <div className="row mb-sm-4">
                     <div className="col-sm-4">
                        <label className="form-label w-100">
                           Correo electrónico *
                           <Field
                              type="text"
                              className="form-control"
                              name="email"
                           />
                           <ErrorMessage
                              name="email"
                              component={() => (
                                 <div className="validateErrors">
                                    {errors.email}
                                 </div>
                              )}
                           />
                           {!(errors.email && touched.email) && (
                              <div className="form-text m-0 ">
                                 Ingrese el email (ej: tu_correo@mail.com)
                              </div>
                           )}
                        </label>
                     </div>
                     <div className="col-sm-4">
                        <label className="form-label w-100">
                           Rol del usuario *
                           <Field
                              className="form-select"
                              name="role_id"
                              as="select"
                           >
                              <option value="">Seleccione un rol</option>
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
                  </div>
                  <div className="row mb-sm-4">
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
                                 Ingrese el apellido (mínimo 3 caracteres)
                              </div>
                           )}
                        </label>
                     </div>
                  </div>
                  <div className="row mb-4">
                     <div className="col-sm-4">
                        <label className="form-label w-100">
                           Contraseña *
                           <div className="input-group">
                              <Field
                                 id="password"
                                 type={inputType}
                                 className="form-control"
                                 name="password"
                              />
                              <span
                                 className="input-group-text icon-revisado"
                                 role="button"
                                 onClick={() => {
                                    passwordView();
                                 }}
                              >
                                 {inputType === 'password' ? (
                                    <span className="material-icons-outlined">
                                       pin
                                    </span>
                                 ) : (
                                    <span className="material-icons-outlined">
                                       lock_open
                                    </span>
                                 )}
                              </span>
                           </div>
                           <ErrorMessage
                              name="password"
                              component={() => (
                                 <span className="validateErrors">
                                    {errors.password}
                                 </span>
                              )}
                           />
                           {!(errors.password && touched.password) && (
                              <div className="form-text m-0">
                                 Ingrese la contraseña (mínimo 5 caracteres)
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
export default UserCreateForm