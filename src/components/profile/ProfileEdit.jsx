import { useAuth } from '../../context/Auth.Context';
import { useUser } from '../../context/User.Context';
import { useNotify } from '../../context/Notify.Context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaUserUpdate } from '../../utils/validate';
import { BackButton } from '../Buttons/BackButton';
import { ConfirmButton } from '../Buttons/ConfirmButton';
import { useNavigate } from 'react-router-dom';

function ProfileEdit(props) {
   const navigate = useNavigate();
   const { notify } = useNotify();
   const { state, updateUserAuth } = useAuth();
   const { editUser } = useUser();

   return (
      <Formik
         /*--------------------*/
         initialValues={{
            name: state.user.name,
            lastname: state.user.lastname,
         }}
         /*--------------------*/
         validationSchema={schemaUserUpdate}
         /*--------------------*/
         onSubmit={async (data) => {
            data._id = state.user._id;
            editUser(data, false).then((res) => {
               updateUserAuth(data);
               notify(res);
               navigate('/perfil');
            });
         }}
         /*--------------------*/
      >
         {({ errors, touched }) => (
            <>
               <div className="row align-items-center mb-5 mt-3">
                  <h2 className="col-6 col-md-4 text-end text-sm-start h3 order-1 order-md-0 mb-0">
                     Editar perfil
                  </h2>
                  <div className="col-6 col-md-4 order-0 order-md-1">
                     <div className="float-md-end">
                        <BackButton refer={'/perfil'} />
                     </div>
                  </div>
               </div>
               <Form>
                  <div className="row mb-4">
                     <div className="col-sm-4">
                        <label className="form-label w-100">
                           Nombre
                           <Field
                              type="text"
                              className="form-control"
                              name="name"
                           />
                           <ErrorMessage
                              name="name"
                              component={() => (
                                 <div className="validateErrors loginText">
                                    {errors.name}
                                 </div>
                              )}
                           />
                           {!(errors.name && touched.name) && (
                              <div className="form-text m-0 loginText">
                                 Ingrese al menos tres caracteres.
                              </div>
                           )}
                        </label>
                     </div>
                     <div className="col-sm-4">
                        <label className="form-label w-100">
                           Apellido
                           <Field
                              type="text"
                              className="form-control"
                              name="lastname"
                           />
                           <ErrorMessage
                              name="lastname"
                              component={() => (
                                 <div className="validateErrors loginText">
                                    {errors.lastname}
                                 </div>
                              )}
                           />
                           {!(errors.lastname && touched.lastname) && (
                              <div className="form-text m-0 loginText">
                                 Ingrese al menos tres caracteres.
                              </div>
                           )}
                        </label>
                     </div>
                  </div>
                  <ConfirmButton />
                  {state.error !== '' ? (
                     <p className="text-center text-danger pt-2">
                        {state.error}
                     </p>
                  ) : (
                     ''
                  )}
               </Form>
            </>
         )}
      </Formik>
   );
} 
export default ProfileEdit;