import { Formik, Form, Field } from "formik";
import { validationSchemaAdd } from "../../../../utils/validate"

const StateAddForm = ({ availableStates, onSubmit }) => {
  return (
    <Formik
      initialValues={{ state: "", description: "" }}
      validationSchema={validationSchemaAdd}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form id="create-state-form">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">Estado</label>
            <Field
              as="select"
              id="state"
              name="state"
              className={`form-select ${touched.state && errors.state ? "is-invalid" : ""}`}
            >
              <option value="">Seleccione un estado</option>
              {availableStates.map((stateOption) => (
                <option key={stateOption} value={stateOption}>{stateOption}</option>
              ))}
            </Field>
            {touched.state && errors.state ? (
              <div className="invalid-feedback">{errors.state}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descripción</label>
            <Field
              as="textarea"
              id="description"
              name="description"
              rows="3"
              className={`form-control ${touched.description && errors.description ? "is-invalid" : ""}`}
            ></Field>
            {touched.description && errors.description ? (
              <div className="invalid-feedback">{errors.description}</div>
            ) : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { StateAddForm };
