import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useService } from '../../context/Service.Context';
import { useNavigate  } from 'react-router-dom';
import { schemaServicesUpdate } from '../../utils/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';
import { ConfirmButton } from '../Buttons/ConfirmButton';

export function ServiceFormEdit() {
   let navigate = useNavigate();
   const { state, editService, findServiceId, findStateService } = useService();
   const { id } = useParams();
   const { notify } = useNotify();

   useEffect(() => {
      findServiceId(id);
      findStateService();
   }, []);

   return (
      <Formik
         /*--------------------*/
         initialValues={{
            client_id: state.service.client_id,
            model: state.service.model,
            brand: state.service.brand,
            serial_number: state.service.serial_number,
            // description: state.service.description,
            // state: state.service.state,
         }}
         /*--------------------*/
         validationSchema={schemaServicesUpdate}
         /*--------------------*/
         onSubmit={(service) => {
            service._id = state.service._id;
            editService(service).then((res) => {
               notify(res);
               navigate(`/servicios/${service._id}`);
            });
         }}
      >
         {({ errors, touched }) => (
            <Form>
               <div className="row mb-4">

                  <div className="col-sm-4">
                     <label className="form-label w-100">
                        Modelo *
                        <Field
                           type="text"
                           className="form-control"
                           name="model"
                        />
                        <ErrorMessage
                           name="model"
                           component={() => (
                              <span className="validateErrors">
                                 *{errors.model}
                              </span>
                           )}
                        />
                        {!(errors.model && touched.model) && (
                           <div className="form-text m-0">
                              Ingrese el modelo (mínimo tres caracteres)
                           </div>
                        )}
                     </label>
                  </div>
               </div>
               <div className="row mb-4">
                  <div className="col-sm-4 mb-4 mb-sm-0">
                     <label className="form-label w-100">
                        Marca *
                        <Field
                           type="text"
                           className="form-control"
                           name="brand"
                        />
                        <ErrorMessage
                           name="brand"
                           component={() => (
                              <span className="validateErrors">
                                 *{errors.brand}
                              </span>
                           )}
                        />
                        {!(errors.brand && touched.brand) && (
                           <div className="form-text m-0">
                              Ingrese la marca (mínimo dos caracteres)
                           </div>
                        )}
                     </label>
                  </div>
                  <div className="col-sm-4">
                     <label className="form-label w-100">
                        Número de serie *
                        <Field
                           type="text"
                           className="form-control"
                           name="serial_number"
                        />
                        <ErrorMessage
                           name="serial_number"
                           component={() => (
                              <span className="validateErrors">
                                 *{errors.serial_number}
                              </span>
                           )}
                        />
                        {!(errors.serial_number && touched.serial_number) && (
                           <div className="form-text m-0">
                              Ingrese el n° de serie (mínimo seis caracteres)
                           </div>
                        )}
                     </label>
                  </div>
               </div>

   
               <ConfirmButton />
            </Form>
         )}
      </Formik>
   );
}
export default ServiceFormEdit