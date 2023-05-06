import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useService } from '../../context/Service.Context';
import { useNavigate  } from 'react-router-dom';
import { schemaServicesUpdate } from '../../services/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';
import { Link } from 'react-router-dom';

export function ServiceFormEdit(){

    let navigate = useNavigate();
    const { state, editService, findServiceId, findStateService } = useService()
    const {id} = useParams()
    const{ notify } = useNotify()
    
    useEffect( () => {
        findServiceId(id)
        findStateService()
    }, [] )

    return(
        <Formik
            /*--------------------*/
            initialValues= {{
                "client_id" : state.service.client_id,
                "model": state.service.model,
                "brand": state.service.brand,
                "serial_number": state.service.serial_number,
                "description": state.service.description,
                "state": state.service.state
            }}
            /*--------------------*/
            validationSchema={schemaServicesUpdate}
            /*--------------------*/
            onSubmit={(service) => {
                service._id = state.service._id
                editService(service)
                .then((res) =>{
                    notify(res)
                    navigate(`/servicios/${service._id}`)
                })            
            }}
        >
            {( { errors,touched } )=>(
                <Form>
                    <div className="row mb-4">
                        <div className="col-sm-4 mb-4 mb-sm-0">
                            <label className="form-label w-100">Estado
                                <Field 
                                    className="form-select"
                                    name="state" 
                                    as="select"
                                >
                                    {state.stateService.map((stateS)=>( 
                                        <option 
                                            key={stateS._id} 
                                            value={stateS.state_name}>{stateS.state_name}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="state" component={() => (<span className='validateErrors'>*{errors.state}</span>)}/>
                                {!(errors.client_id && touched.client_id) && <div className="form-text m-0">
                                    Seleccione el estado actual del servicio.
                                </div>}
                            </label>
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label w-100">Modelo
                                <Field 
                                    type="text" 
                                    className="form-control" 
                                    name="model"
                                />
                                <ErrorMessage name="model" component={() => (<span className='validateErrors'>*{errors.model}</span>)}/>
                                {!(errors.model && touched.model) && <div className="form-text m-0">
                                    Ingrese al menos tres caracteres.
                                </div>}
                            </label>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-4 mb-4 mb-sm-0">
                            <label  className="form-label w-100">Marca
                                <Field 
                                    type="text" 
                                    className="form-control"
                                    name="brand"
                                />
                                <ErrorMessage name="brand" component={() => (<span className='validateErrors'>*{errors.brand}</span>)}/>
                                {!(errors.brand && touched.brand) && <div className="form-text m-0">
                                    Ingrese al menos dos caracteres.
                                </div>}
                            </label>
                        </div>
                        <div className="col-sm-4">
                            <label className="form-label w-100">Número de serie
                                <Field 
                                    type="text" 
                                    className="form-control" 
                                    name="serial_number"
                                    />
                                <ErrorMessage name="serial_number" component={() => (<span className='validateErrors'>*{errors.serial_number}</span>)}/>
                                {!(errors.serial_number && touched.serial_number) && <div className="form-text m-0">
                                    Ingrese al menos seis caracteres.
                                </div>}
                            </label>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-sm-8">
                            <label className='w-100'>Descripción del problema</label>
                            <Field 
                                className="form-select"
                                name="description" 
                                as="textarea"
                            ></Field>
                            <ErrorMessage name="description" component={() => (<span className='validateErrors'>*{errors.description}</span>)}/>
                            {!(errors.description && touched.description) && <div className="form-text m-0">
                                Ingrese al menos diez caracteres.
                            </div>}
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className="col-sm-8 d-flex align-items-sm-center">
                            <Link to={`/servicios/${id}`} className="btn-back position-edit-back text-center me-sm-3">
                                <span className="icon-atras f-20 me-2"></span>Atrás
                            </Link>
                            <button type='submit' className='btn-confirm order-1 order-sm-2 mb-4 mb-sm-0'>
                                <span className="icon-confirmar me-2 f-20"></span>    Confirmar
                            </button>
                        </div>                    
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default ServiceFormEdit