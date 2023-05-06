import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';
import { useUser } from '../../context/User.Context';
import { schemaUserRegister } from '../../services/validate';
import { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Loading from '../Loading';
import authRole from '../../services/auth.role.js';

export function UserCreateForm(){

    const navigate = useNavigate();
    const { notify } = useNotify();
    const { state, addUser, findRole } = useUser();
    const [loading, setloading] = useState(true)

    useEffect( () => {
        findRole()
            .then(() => {
                setloading(false)
            })
        
   }, [] )

   function passwordView(){
    const input = document.getElementById('password')
    input.type == 'password' ? input.type = 'text' : input.type = 'password'
   }

    return(
        <Formik 
                /*--------------------*/
                initialValues= {{
                    "email": "",
                    "name": "",
                    "lastname": "",
                    "role_id": "",
                    "password": "",
                    }}
                /*--------------------*/
                validationSchema={schemaUserRegister}
                /*--------------------*/
                onSubmit={(data, { resetForm }) => {
                    addUser(data)
                    .then((res)=>{
                        notify(res)
                        resetForm()
                    })
              }}
                /*--------------------*/
        >
            {( { errors, touched } )=>(
                <Form>
                    <div className='row mb-4'>
                        <div className="col-sm-4">
                            <label className="form-label w-100">Correo electrónico
                                <Field 
                                    type="text" 
                                    className="form-control" 
                                    name="email"
                                />
                                <ErrorMessage name="email" component={() => (<div className='validateErrors'>{errors.email}</div>)}/>
                                {!(errors.email && touched.email) && <div className="form-text m-0 ">
                                Ejemplo: "tu_correo@mail.com".
                                </div>}
                            </label>
                        </div>

                        {loading ?      
                        <Loading /> : (
                        <div className="col-sm-4 mb-4 mb-sm-0">
                            <label className="form-label w-100">Rol
                                <Field 
                                    className="form-select"
                                    name="role_id" 
                                    as="select"
                                >
                                    <option value="">Seleccione un rol</option>
                                        {state.roles.map((role)=>( 
                                            <option 
                                                key={role._id} 
                                                value={role._id}>{authRole(role.role_name)}
                                            </option>
                                        ))}
                                </Field>
                                <ErrorMessage name="role_id" component={() => (<div className='validateErrors'>*{errors.role_id}</div>)}/>
                                {!(errors.role_id && touched.role_id) && <div className="form-text m-0">
                                    Seleccione el rol del usuario. 
                                </div>}
                            </label>
                        </div>
                        )}
                    </div>
                    <div className='row mb-4'>
                        <div className="col-sm-4">
                            <label className="form-label w-100">Nombre
                                <Field 
                                    type="text" 
                                    className="form-control" 
                                    name="name"
                                />
                                <ErrorMessage name="name" component={() => (<div className='validateErrors'>{errors.name}</div>)}/>
                                {!(errors.name && touched.name) && <div className="form-text m-0">
                                Ingrese al menos tres caracteres.
                                </div>}
                            </label>
                        </div>

                        <div className="col-sm-4">
                            <label className="form-label w-100">Apellido
                                <Field 
                                    type="text" 
                                    className="form-control" 
                                    name="lastname"
                                />
                                <ErrorMessage name="lastname" component={() => (<div className='validateErrors '>{errors.lastname}</div>)}/>
                                {!(errors.lastname && touched.lastname) && <div className="form-text m-0">
                                Ingrese al menos tres caracteres.
                                </div>}
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="form-label w-100">Contraseña
                            <div className='input-group'>
                                <Field 
                                    id="password"
                                    type="password" 
                                    className="form-control" 
                                    name="password"
                                />
                                <span className="input-group-text icon-revisado" role="button" onClick={()=>{passwordView()}}></span>
                            </div>
                            <ErrorMessage name="password" component={() => (<span className='validateErrors'>{errors.password}</span>)}/>
                            </label>
                        </div>
                    </div>
                    <button type='submit' className='btn-confirm order-1 order-sm-2'>
                        <span className="icon-confirmar me-2 f-20"></span>
                        Confirmar
                    </button>  
                </Form>
            )}
        </Formik>
    )
}
export default UserCreateForm