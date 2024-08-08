import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaServicesCreate } from '../../../utils/validate';

const ServiceFormNew = ({ onSubmit, state, clientId }) => {
  return (
    <Formik
      initialValues={{
        client_id: clientId ? clientId : "",
        model: '',
        brand: '',
        serial_number: '',
        description: '',
      }}
      validationSchema={schemaServicesCreate}
      onSubmit={(service) => {
        onSubmit(service);
      }}
    >
      {({ errors, touched }) => (
        <Form id="new-service-form">
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Cliente *
                <Field
                  as="select"
                  name="client_id"
                  className={`form-select ${touched.client_id && errors.client_id ? "is-invalid" : ""}`}
                  disabled={!!clientId}
                >
                  <option value="" disabled>Seleccione un cliente</option>
                  {state.clients.map((client) => (
                    <option key={client._id} value={client._id}>
                      {client.name_busines}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="client_id"
                  component="div"
                  className="invalid-feedback"
                />
              </label>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Modelo *
                <Field
                  type="text"
                  name="model"
                  className={`form-control ${touched.model && errors.model ? "is-invalid" : ""}`}
                  placeholder="Ingrese el modelo "
                />
                <ErrorMessage
                  name="model"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.model && touched.model) && (
                  <div className="form-text">
                    Mínimo 3 caracteres
                  </div>
                )}
              </label>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Marca *
                <Field
                  type="text"
                  name="brand"
                  className={`form-control ${touched.brand && errors.brand ? "is-invalid" : ""}`}
                  placeholder="Ingrese la marca"
                />
                <ErrorMessage
                  name="brand"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.brand && touched.brand) && (
                  <div className="form-text">
                    Mínimo 2 caracteres                  </div>
                )}
              </label>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Número de serie *
                <Field
                  type="text"
                  name="serial_number"
                  className={`form-control ${touched.serial_number && errors.serial_number ? "is-invalid" : ""}`}
                  placeholder="Ingrese el n° de serie"
                />
                <ErrorMessage
                  name="serial_number"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.serial_number && touched.serial_number) && (
                  <div className="form-text">
                    Mínimo 6 caracteres
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label w-100">
              Descripción *
              <Field
                as="textarea"
                name="description"
                rows="3"
                className={`form-control ${touched.description && errors.description ? "is-invalid" : ""}`}
                placeholder="Ingrese la descripción"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="invalid-feedback"
              />
              {!(errors.description && touched.description) && (
                <div className="form-text">
                  Mínimo 10 caracteres
                </div>
              )}
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export { ServiceFormNew };
