import { useEffect, useState } from 'react';
import { useService } from '../../context/Service.Context';
import ServiceList from '../../components/service/ServiceList';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import RoleAdmin from '../../components/authRole/RoleAdmin';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaSearch } from '../../services/validate';


function Services(){

    const {findService, serviceSearch } = useService()
    const [loading, setLoading] = useState(true)
    
    useEffect(  () => {
        findService()
        .then(() => setLoading(false))
    }, [] )

    return(
        <main>
            <div className="row justify-content-between align-items-center mt-5 mt-sm-0">
                <div className="col-12 col-sm-auto my-5">
                    <h2 className='mt-5 mt-sm-0 text-center text-sm-start'>Servicios</h2>
                  
                    <Formik 
                        /*--------------------*/
                        initialValues= {{
                            "search": "",
                        }}
                        /*--------------------*/
                        validationSchema={schemaSearch}
                        /*--------------------*/
                        onSubmit={(data) => {
                            console.log('data',data)
                            serviceSearch(data.search)
                        }}
                    >
                    {( { errors, touched } )=>(
                    <Form className="w-100 m-auto text-center">
                       
                        <div className="mb-3">
                                        <label className="form-label">Ingrese el nombrel del cliente o el numero de ingreso del servicio
                                            <Field 
                                                type="text" 
                                                className="form-control" 
                                                name="search"
                                            />
                                            <ErrorMessage name="search" component={() => (<div className='validateErrors loginText'>{errors.search}</div>)}/>
                                            {!(errors.search && touched.search) && <div className="form-text m-0 loginText">Ejemplo: "Quilmes" o "10".</div>}
                                        </label>
                        <button type="submit" className="btn btn-outline-primary w-100 ">Buscar</button>
                        </div>
                    </Form>
                )}
                                
            </Formik>
                    

                </div>
                <div className="col-12 col-sm-auto">
                <RoleAdmin>
                    <Link to='/servicios/nuevo' className="btn-add d-flex justify-content-center align-items-center">
                        <span className="icon-agregar me-2 f-20"></span>
                        Nuevo servicio
                    </Link>
                </RoleAdmin>
                </div>
            </div>
            {loading ? <Loading /> : <ServiceList />}
        </main>
    )
}
export default Services;
