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
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              Modelo *
              <Field
                type="text"
                name="model"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <ErrorMessage
                name="model"
                component={() => (
                  <div style={{ color: 'red', marginTop: '4px' }}>
                    *{errors.model}
                  </div>
                )}
              />
              {!(errors.model && touched.model) && (
                <div style={{ marginTop: '4px', color: '#6c757d' }}>
                  Ingrese el modelo (mínimo tres caracteres)
                </div>
              )}
            </label>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              Marca *
              <Field
                type="text"
                name="brand"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <ErrorMessage
                name="brand"
                component={() => (
                  <div style={{ color: 'red', marginTop: '4px' }}>
                    *{errors.brand}
                  </div>
                )}
              />
              {!(errors.brand && touched.brand) && (
                <div style={{ marginTop: '4px', color: '#6c757d' }}>
                  Ingrese la marca (mínimo dos caracteres)
                </div>
              )}
            </label>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              Número de serie *
              <Field
                type="text"
                name="serial_number"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <ErrorMessage
                name="serial_number"
                component={() => (
                  <div style={{ color: 'red', marginTop: '4px' }}>
                    *{errors.serial_number}
                  </div>
                )}
              />
              {!(errors.serial_number && touched.serial_number) && (
                <div style={{ marginTop: '4px', color: '#6c757d' }}>
                  Ingrese el n° de serie (mínimo seis caracteres)
                </div>
              )}
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ServiceFormEdit;
