import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaUserUpdateSA } from '../../utils/validate';
import { authRole } from "../../utils/auth.role";

export function UserFormEdit({ initialValues, onSubmit, state }) {

  return (
      <Formik
        initialValues={initialValues}
        validationSchema={schemaUserUpdateSA}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form id="edit-user-form">
            <div className="row mb-4">
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label w-100">
                  Nombre
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
                  Apellido
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
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label w-100">
                  Rol
                  <Field
                    as="select"
                    name="role_id"
                    className={`form-select ${touched.role_id && errors.role_id ? "is-invalid" : ""}`}
                  >
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
              <div className="col-12 col-md-6 mb-4">
                <label className="form-label w-100">
                  Estado
                  <Field
                    as="select"
                    name="softDelete"
                    className={`form-select ${touched.softDelete && errors.softDelete ? "is-invalid" : ""}`}
                  >
                    <option value="false">Activo</option>
                    <option value="true">Inactivo</option>
                  </Field>
                  <ErrorMessage
                    name="softDelete"
                    component="div"
                    className="invalid-feedback"
                  />
                  {!(errors.softDelete && touched.softDelete) && (
                    <div className="form-text">
                      Seleccione el estado del usuario
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

export default UserFormEdit;
