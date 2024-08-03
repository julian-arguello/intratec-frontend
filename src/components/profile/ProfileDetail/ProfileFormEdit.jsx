import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemaUserUpdate } from "../../../utils/validate";

const ProfileFormEdit = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaUserUpdate}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form id="edit-profile-form">
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Nombre
                <Field
                  type="text"
                  name="name"
                  className={`form-control ${
                    touched.name && errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Ingrese el nombre"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.name && touched.name) && (
                  <div className="form-text">Mínimo 3 caracteres</div>
                )}
              </label>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Apellido
                <Field
                  type="text"
                  name="lastname"
                  className={`form-control ${
                    touched.lastname && errors.lastname ? "is-invalid" : ""
                  }`}
                  placeholder="Ingrese el apellido"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.lastname && touched.lastname) && (
                  <div className="form-text">Mínimo 3 caracteres</div>
                )}
              </label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { ProfileFormEdit };
