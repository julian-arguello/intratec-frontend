import { useAuth } from '../../context/Auth.Context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';
import { schemaRecovery } from '../../services/validate';
import imagenes from '../../assets/images';
import { Notification } from '../../components/Notification';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export function RecoveryPage(){

    let navigate = useNavigate();
    const { notify } = useNotify();
    const { recovery } = useAuth()
    return(
        <div>
            <Notification />
            <Formik 
                /*--------------------*/
                initialValues= {{
                    "email": "",
                }}
                /*--------------------*/
                validationSchema={schemaRecovery}
                /*--------------------*/
                onSubmit={(data) => {
                    recovery(data.email)
                    .then((data)=>{
                        console.log("recovery", data)
                        notify(data)
                        if(data.status != 'error'){
                            navigate('/')
                        }
                    })
                    .catch((err) => {
                        notify(err)
                    })
                }}
            >
                {( { errors, touched } )=>(
                    <Form className="w-100 m-auto text-center">
                        <div className="fondo">

                            <main className="position-absolute top-50 start-50 translate-middle d-md-flex p-5 loginBox">
                                <div className="flex-shrink-0 mb-auto text-center d-xs-inline">
                                    <h1 className='d-none'>intratec</h1>
                                    <img src={ imagenes.desk } alt="logo" className="d-none d-md-inline col-10 w-auto" />
                                    <img src={ imagenes.tablet } alt="logo" className="d-none d-sm-inline d-md-none col-12 w-auto" />
                                    <img src={ imagenes.mob } alt="logo" className="d-xs-inline d-sm-none col-12 w-auto" />                    
                                    <div className="pb-5"></div>
                                    <img src={ imagenes.edificios } alt="edificios" className="d-none d-md-block w-auto"/>
                                </div>

                                <div className="flex-grow-1 ms-md-5 col-xs-12">                    
                                    <h2 className="text-center text-md-start pb-2 pb-md-0 mb-4">Recuperar contraseña</h2>
                                    <div className="mb-3">
                                        <label className="form-label text-start  w-100">Correo electrónico
                                            <Field 
                                                type="text" 
                                                className="form-control" 
                                                name="email"
                                            />
                                            <ErrorMessage name="email" component={() => (<div className='validateErrors loginText'>{errors.email}</div>)}/>
                                            {!(errors.email && touched.email) && <div className="form-text m-0 loginText">Ejemplo: "tu_correo@mail.com".</div>}
                                        </label>
                                    </div>
                            
                                    <button type="submit" className="btn btn-outline-primary w-100 ">Solicitar</button>
                                    <Link to='/' className="btn btn-outline-primary w-100 mt-2">
                                        Cancelar
                                    </Link> 
                                </div>
                            </main>
                        </div>
                    </Form>
                )}
                                
            </Formik>
        </div>
    )
}
export default RecoveryPage