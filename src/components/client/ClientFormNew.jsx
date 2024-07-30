import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaClientRegister } from '../../utils/validate';

const ClientFormNew = ({ onSubmit, onClose }) => {

  return (
    <Formik
      initialValues={{
        name_busines: '',
        cuit_cuil: '',
        phone: '',
        email: '',
      }}
      validationSchema={schemaClientRegister}
      onSubmit={(client) => {
        onSubmit(client);
        onClose();
      }}
    >
      {({ errors, touched }) => (
        <Form id="new-client-form">
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Nombre del cliente
                <Field
                  type="text"
                  name="name_busines"
                  className={`form-control ${touched.name_busines && errors.name_busines ? "is-invalid" : ""}`}
                  placeholder="Ingrese el nombre"
                />
                <ErrorMessage
                  name="name_busines"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.name_busines && touched.name_busines) && (
                  <div className="form-text">
                    Mínimo 3 caracteres
                  </div>
                )}
              </label>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Cuit / Cuil
                <Field
                  type="number"
                  name="cuit_cuil"
                  className={`form-control ${touched.cuit_cuil && errors.cuit_cuil ? "is-invalid" : ""}`}
                  placeholder="Ingrese el cuit/cuil"
                />
                <ErrorMessage
                  name="cuit_cuil"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.cuit_cuil && touched.cuit_cuil) && (
                  <div className="form-text">
                    11 caracteres numéricos
                  </div>
                )}
              </label>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Teléfono
                <Field
                  type="number"
                  name="phone"
                  className={`form-control ${touched.phone && errors.phone ? "is-invalid" : ""}`}
                  placeholder="Ingrese el teléfono"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.phone && touched.phone) && (
                  <div className="form-text">
                    Mínimo 8 caracteres numéricos
                  </div>
                )}
              </label>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Correo electrónico
                <Field
                  type="email"
                  name="email"
                  className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                  placeholder="Ingrese el email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.email && touched.email) && (
                  <div className="form-text">
                    ej: tu_correo@mail.com
                  </div>
                )}
              </label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export { ClientFormNew }