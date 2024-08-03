import { Formik, Form  } from "formik";
import {schemaPasswordUpdate} from "../../../utils/validate";
import { PasswordField } from "../../../components/UI/Form/PasswordField/PasswordField";


const ProfilePasswordFormEdit = ({ onSubmit, initialValues, error, clearError }) => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaPasswordUpdate}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleChange }) => (
        <Form id="edit-password-form">
          <div className="row mb-4">
            <div className="col-12 mb-4">
              <PasswordField
                id="oldPassword"
                label="Contraseña Actual"
                name="oldPassword"
                classNamem="mb-4"
                classNamemField={`form-control ${touched.oldPassword && errors.oldPassword ? "is-invalid" : ""}`}
                error={errors.oldPassword}
                touched={touched.oldPassword}
                onChange={(e) => {
                  handleChange(e);
                  clearError();
                }}
                
              />
            </div>

            <div className="col-12 mb-4">
              <PasswordField
                id="newPassword"
                label="Nueva Contraseña"
                name="newPassword"
                classNamem="mb-4"
                classNamemField={`form-control ${touched.newPassword && errors.newPassword ? "is-invalid" : ""}`}
                error={errors.newPassword}
                touched={touched.newPassword}

              />
            </div>

            {error && <div className="text-danger">{error}</div>}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { ProfilePasswordFormEdit };
