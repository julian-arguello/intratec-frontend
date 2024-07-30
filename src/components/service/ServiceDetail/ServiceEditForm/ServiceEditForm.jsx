import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaServicesUpdate } from '../../../../utils/validate'; // Asegúrate de que esta ruta sea correcta

export const ServiceFormEdit = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaServicesUpdate}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form id="edit-service-form">
          <div className="mb-3">
            <label htmlFor="model" className="form-label">
              Modelo *
            </label>
            <Field
              type="text"
              name="model"
              className={`form-control ${touched.model && errors.model ? "is-invalid" : ""}`}
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
          </div>

          <div className="mb-3">
            <label htmlFor="brand" className="form-label">
              Marca *
            </label>
            <Field
              type="text"
              name="brand"
              className={`form-control ${touched.brand && errors.brand ? "is-invalid" : ""}`}
            />
            <ErrorMessage
              name="brand"
              component="div"
              className="invalid-feedback"
            />
            {!(errors.brand && touched.brand) && (
              <div className="form-text">
                Mínimo 2 caracteres
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="serial_number" className="form-label">
              Número de serie *
            </label>
            <Field
              type="text"
              name="serial_number"
              className={`form-control ${touched.serial_number && errors.serial_number ? "is-invalid" : ""}`}
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ServiceFormEdit;
