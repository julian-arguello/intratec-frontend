import { useAuth } from '../../context/Auth.Context';
import { useUser } from '../../context/User.Context';
import { useNotify } from '../../context/Notify.Context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaUserUpdate } from '../../services/validate';
import { useLocation } from "react-router-dom";

function ProfileEdit(props){

    const { notify } = useNotify();
    const { state , updateUserAuth} = useAuth();
    const  user = useUser();  

    return(        
        <Formik 
            /*--------------------*/
            initialValues= {{
                "name": state.user.name,
                "lastname": state.user.lastname,
            }}
            /*--------------------*/
            validationSchema={schemaUserUpdate}
            /*--------------------*/
            onSubmit={async (data) => {
                data._id=state.user._id
                updateUserAuth(data)
                user.editUser(data, false)
                .then((data)=>{
                    notify(data)
                })
            }}
            /*--------------------*/
        >
            {( { errors, touched } )=>(
                <Form>        
                    <div className="mt-5">
                        <label className="form-label">Nombre
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="name"
                            />
                            <ErrorMessage name="name" component={() => (<div className='validateErrors loginText'>{errors.name}</div>)}/>
                            {!(errors.name && touched.name) && <div className="form-text m-0 loginText">
                                Ingrese al menos tres caracteres.
                            </div>}
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="lastname"
                            />
                            <ErrorMessage name="lastname" component={() => (<div className='validateErrors loginText'>{errors.lastname}</div>)}/>
                            {!(errors.lastname && touched.lastname) && <div className="form-text m-0 loginText">
                                Ingrese al menos tres caracteres.
                            </div>}
                        </label>
                    </div>
                    <button type="submit" className="btn-confirm" onClick={props.function}>
                        <span className="icon-confirmar me-2 f-20"></span>Confirmar
                    </button>
                    {state.error !== '' ? <p className="text-center text-danger pt-2">{state.error}</p> : ''}
                    <span className='btn-cancel d-flex justify-content-center align-items-center' onClick={props.function} role="button">
                        <span className="icon-cancelar f-20 me-2"></span>Cancelar
                    </span> 
                    
                </Form>
            )}                
        </Formik>
    )
} 
export default ProfileEdit;