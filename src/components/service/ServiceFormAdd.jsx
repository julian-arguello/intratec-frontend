import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClient } from '../../context/Client.Context';
import { useService } from '../../context/Service.Context';
import { useAuth } from '../../context/Auth.Context';
import { schemaServicesCreate } from '../../utils/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';
import { ConfirmButton } from '../Buttons/ConfirmButton';

export function ServiceFormAdd() {
  const navigate = useNavigate();
  const { state, findClient } = useClient();
  const { addService } = useService();
  const auth = useAuth();
  const { notify } = useNotify();

  useEffect(() => {
    findClient();
  }, []);

  return (
    <Formik
      /*--------------------*/
      initialValues={{
        client_id: '',
        model: '',
        brand: '',
        serial_number: '',
        description: '',
      }}
      /*--------------------*/
      validationSchema={schemaServicesCreate}
      /*--------------------*/
      onSubmit={(service) => {
        service.state = 'Recepcionado';
        service.create_at = new Date();
        service.user_id = auth.state.user._id;
        service.softDelete = false;
        addService(service).then((res) => {
          notify(res.msg);
          navigate('/servicios');
        });
      }}
      /*--------------------*/
    >
      {({ errors, touched }) => (
        <Form>
          <div className="row mb-4">
            <div className="col-sm-4 mb-4 mb-sm-0">
              <label className="form-label w-100">
                Cliente *
                <Field className="form-select" name="client_id" as="select">
                  <option value=""></option>
                  {state.clients.map((client) => (
                    <option key={client._id} value={client._id}>
                      {client.name_busines}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="client_id"
                  component={() => (
                    <div className="validateErrors">*{errors.client_id}</div>
                  )}
                />
                {!(errors.client_id && touched.client_id) && (
                  <div className="form-text m-0 loginText">
                    Seleccione el cliente
                  </div>
                )}
              </label>
            </div>
            <div className="col-sm-4">
              <label className="form-label w-100">
                Modelo *
                <Field type="text" className="form-control" name="model" />
                <ErrorMessage
                  name="model"
                  component={() => (
                    <div className="validateErrors">*{errors.model}</div>
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
                <Field type="text" className="form-control" name="brand" />
                <ErrorMessage
                  name="brand"
                  component={() => (
                    <div className="validateErrors">*{errors.brand}</div>
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
                    <div className="validateErrors">
                      *{errors.serial_number}
                    </div>
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

          <div className="row mb-4">
            <div className="col-sm-8">
              <label className="w-100">
                Descripción *
                <Field
                  className="form-select"
                  name="description"
                  as="textarea"
                />
                <ErrorMessage
                  name="description"
                  component={() => (
                    <div className="validateErrors">*{errors.description}</div>
                  )}
                />
                {!(errors.description && touched.description) && (
                  <div className="form-text m-0">
                    Ingrese la descripción (mínimo diez caracteres)
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
export default ServiceFormAdd;
