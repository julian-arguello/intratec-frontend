import { Field, ErrorMessage } from "formik";
import styles from "../FormField.module.scss";

const CustomField = ({
  id,
  label,
  type,
  name,
  placeholder,
  ariaDescribedby,
  classNamem = "",
  error,
  touched,
}) => {
  return (
    <div className={`mb-3 w-100 ${classNamem} ${styles.boxField}`}>
      <label className="" htmlFor={id}>
        {label}
      </label>

      <Field
        id={id}
        type={type}
        name={name}
        aria-describedby={id + "-aria-describedby"}
        placeholder={placeholder}
        className={`form-control ${styles.input}`}
      />

      <ErrorMessage
        name={name}
        component={() => <div className="form-text text-danger w-100">{error}</div>}
      />

      
      {ariaDescribedby && !(error && touched) && (
        <div className="form-text" id={id + "-aria-describedby"}>
          {ariaDescribedby}
        </div>
      )}


    </div>
  );
};

export { CustomField };
