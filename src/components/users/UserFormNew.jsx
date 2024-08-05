import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaUserRegister } from '../../utils/validate';
import { PasswordField } from '../UI/Form/PasswordField/PasswordField';
import { authRole } from '../../utils/auth.role'

const UserFormNew = ({ onSubmit, state }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        lastname: '',
        role_id: '',
        password: '',
      }}
      validationSchema={schemaUserRegister}
      onSubmit={(user) => {
        onSubmit(user);
      }}
    >
      {({ errors, touched }) => (
        <Form id="new-user-form">
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Correo electrónico *
                <Field
                  type="text"
                  name="email"
                  className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                  placeholder="Ingrese el correo electrónico"
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
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Rol del usuario *
                <Field
                  as="select"
                  name="role_id"
                  className={`form-select ${touched.role_id && errors.role_id ? "is-invalid" : ""}`}
                >
                  <option value="" disabled>Seleccione un rol</option>
                  {state.roles.map((role) => (
                    <option key={role._id} value={role._id}>
                      {authRole(role.role_name)}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="role_id"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.role_id && touched.role_id) && (
                  <div className="form-text">
                    Seleccione el rol del usuario
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Nombre *
                <Field
                  type="text"
                  name="name"
                  className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
                  placeholder="Ingrese el nombre"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.name && touched.name) && (
                  <div className="form-text">
                    Mínimo 3 caracteres
                  </div>
                )}
              </label>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <label className="form-label w-100">
                Apellido *
                <Field
                  type="text"
                  name="lastname"
                  className={`form-control ${touched.lastname && errors.lastname ? "is-invalid" : ""}`}
                  placeholder="Ingrese el apellido"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="invalid-feedback"
                />
                {!(errors.lastname && touched.lastname) && (
                  <div className="form-text">
                    Mínimo 3 caracteres
                  </div>
                )}
              </label>
            </div>
          </div>

          <div className="row mb-4">
          <PasswordField
                id="passLogin"
                label="Contraseña"
                name="password"
                classNamem="mb-4"
                classNamemField={`form-control "mb-4 ${touched.password && errors.password ? "is-invalid " : " "}`}
                error={errors.password}
                touched={touched.password}
              />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { UserFormNew };
