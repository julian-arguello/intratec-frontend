import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useClient } from '../../context/Client.Context';
import { schemaClientRegister } from '../../services/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';

export function ClientFormAdd(){

    const navigate = useNavigate();
    const { addClient } = useClient()
    const{ notify } = useNotify()
    
   return(
        <Formik
            /*--------------------*/
            initialValues= {{
                "name_busines": "",
                "cuit_cuil": "",
                "phone": "",
                "email": ""
            }}
            /*--------------------*/
            validationSchema={schemaClientRegister}
            /*--------------------*/
            onSubmit={(client) => {
                client.create_at = new Date;
                client.softDelete = false
                addClient(client)
                .then((res)=>{
                    notify(res)
                    navigate('/clientes')
                })
            }}
            /*--------------------*/
        >
            {( { errors, touched } )=>(
                <Form>
                    <div className='row mb-4'>
                        <div className="col-sm-4">
                            <label className="form-label w-100">Nombre del cliente
                                <Field 
                                    type="text" 
                                    className="form-control" 
                                    name="name_busines"
                                />
                                <ErrorMessage name="name_busines" component={() => (<span className='validateErrors'>{errors.name_busines}</span>)}/>
                                {!(errors.name_busines && touched.name_busines) && <div className="form-text m-0">
                                    Ingrese al menos tres caracteres.
                                </div>}
                            </label>                            
                        </div>
                        <div className="col-sm-4 mb-4 mb-sm-0">
                            <label  className="form-label w-100">Cuit / Cuil
                                <Field 
                                    type="number" 
                                    className="form-control"
                                    name="cuit_cuil"
                                />
                                <ErrorMessage name="cuit_cuil" component={() => (<span className='validateErrors'>{errors.cuit_cuil}</span>)}/>
                                {!(errors.cuit_cuil && touched.cuit_cuil) && <div className="form-text m-0">
                                    Ingrese los once caracteres numéricos.
                                </div>}
                            </label>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className="col-sm-4">
                            <label className="form-label w-100">Teléfono
                                <Field 
                                    type="number" 
                                    className="form-control" 
                                    name="phone"
                                />
                                <ErrorMessage name="phone" component={() => (<span className='validateErrors'>{errors.phone}</span>)}/>
                                {!(errors.phone && touched.phone) && <div className="form-text m-0">
                                    Ingrese al menos ocho caracteres numéricos.
                                </div>}
                            </label>
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label w-100">Correo electrónico
                                <Field 
                                    type="email" 
                                    className="form-control" 
                                    name="email"
                                />
                                <ErrorMessage name="email" component={() => (<span className='validateErrors'>{errors.email}</span>)}/>
                                {!(errors.email && touched.email) && <div className="form-text m-0">
                                    Ejemplo: "tu_correo@mail.com".
                                </div>}
                            </label>
                        </div>
                    </div>                                
                    <div className='row'>
                        <div className="col-sm-8 d-flex flex-column align-items-sm-end">
                            <button className='btn-back position-edit-back me-sm-3 order-2 order-sm-1' onClick={() => navigate(-1)}><span className="icon-atras f-20 me-2"></span>Atrás</button>
                            <button type='submit' className='btn-confirm order-1 order-sm-2 mb-4 mb-sm-0'><span className="icon-confirmar f-20 me-2"></span>Confirmar</button>
                        </div>                    
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default ClientFormAdd