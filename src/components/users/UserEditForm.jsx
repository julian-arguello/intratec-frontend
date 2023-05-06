import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';
import { useUser } from '../../context/User.Context';
import { schemaUserUpdateSA } from '../../services/validate';
import { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Loading from '../Loading';
import authRole from '../../services/auth.role.js';

export function UserEditForm(props){

    const navigate = useNavigate();
    const { notify } = useNotify();
    const { state, editUser, findRole, findUser } = useUser();
    const [loading, setloading] = useState(true)

    useEffect( () => {
        findRole()
            .then(() => {
                setloading(false)
            })
        
   }, [] )

    return(
        <Formik 
                /*--------------------*/
                initialValues= {{
                    "name": props.user.name,
                    "lastname": props.user.lastname,
                    "role_id": props.user.role_id,
                    "_id": props.user._id,
                    "softDelete": props.user.softDelete
                    }}
                /*--------------------*/
                validationSchema={schemaUserUpdateSA}
                /*--------------------*/
                onSubmit={(data) => {
                    editUser(data, true)
                    .then((res)=>{
                        notify(res)
                        findUser()
                    })
                
                }}
                /*--------------------*/
        >
            {( { errors, touched } )=>(
                <Form className="w-100 m-auto mt-3">
                  
                    {loading ?   
                        <Loading /> : (

                            <div className="mb-3">
                                <label className="form-label w-100">Rol
                                    <Field 
                                        className="form-select"
                                        name="role_id" 
                                        as="select"
                                    >
                                            {state.roles.map((role)=>( 
                                                <option 
                                                    key={role._id} 
                                                    value={role._id}>{authRole(role.role_name)}
                                                </option>
                                            ))}
                                    </Field>
                                    <ErrorMessage name="role_id" component={() => (<div className='validateErrors'>*{errors.role_id}</div>)}/>
                                    {!(errors.role_id && touched.role_id) && <small>
                                        Seleccione el rol del usuario. 
                                    </small>}
                                </label>
                            </div>
                    )}

                        <div className="mb-3">
                                <label className="form-label w-100">Estado
                                    <Field 
                                        className="form-select"
                                        name="softDelete" 
                                        as="select"
                                    >
                                    <option 
                                        key={props.user._id} 
                                        value='false'>Activo
                                    </option>
                                    <option 
                                        key={props.user._id} 
                                        value='true'>Inactivo
                                    </option>
                                    </Field>
                                    <ErrorMessage name="softDelete" component={() => (<div className='validateErrors'>*{errors.softDelete}</div>)}/>
                                    {!(errors.softDelete && touched.softDelete) && <small>
                                        Seleccione el estado del usuario. 
                                    </small>}
                                </label>
                            </div>

                    <div className="mb-3">
                        <label className="form-label w-100">Nombre
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="name"
                            />
                            <ErrorMessage name="name" component={() => (<div className='validateErrors'>{errors.name}</div>)}/>
                            {!(errors.name && touched.name) && <small>
                            Ingrese al menos tres caracteres.
                            </small>}
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label w-100">Apellido
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="lastname"
                            />
                            <ErrorMessage name="lastname" component={() => (<div className='validateErrors '>{errors.lastname}</div>)}/>
                            {!(errors.lastname && touched.lastname) && <small>
                            Ingrese al menos tres caracteres.
                            </small>}
                        </label>
                    </div>
                   
                    <button type="submit" className="box-proceso text-white rounded-4 d-flex align-items-center px-3 py-2 float-end position-absolute top-0 end-0">
                        <span className='icon-confirmar f-20'></span>
                    </button>  
                </Form>
            )}
        </Formik>
    )
}
export default UserEditForm