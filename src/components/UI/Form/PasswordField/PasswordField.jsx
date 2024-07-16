import { useState } from "react";
import { Field, ErrorMessage } from "formik";

import { GrFormView } from "react-icons/gr";
import { GrFormViewHide } from "react-icons/gr";

import styles from "../FormField.module.scss";

const PasswordField = ({
  id,
  label,
  name,
  placeholder = "",
  ariaDescribedby,
  classNamem = "",
  error,
  touched,
}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={`mb-3 w-100 ${classNamem} ${styles.boxField}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      <div className={`input-group w-100 ${styles.boxGroupPass}`}>
        <Field
          id={id}
          type={!showPass ? "password" : "text"}
          name={name}
          aria-describedby={id + "-aria-describedby"}
          placeholder={placeholder}
          className={`form-control ${styles.inputPass}`}
        />
        <span
          className={`btn btn-outline-secondary ${styles.inputPassShow}`}
          onClick={() => {
            setShowPass((prevShowPass) => !prevShowPass);
          }}
        >
          {showPass ? <GrFormViewHide /> : <GrFormView />}
        </span>
      </div>

      <ErrorMessage
        name={name}
        component={() => (
          <div className="form-text text-danger w-100">{error}</div>
        )}
      />
      {ariaDescribedby && !(error && touched) && (
        <div className="form-text" id={id + "-aria-describedby"}>
          {ariaDescribedby}
        </div>
      )}
    </div>
  );
};

export { PasswordField };
