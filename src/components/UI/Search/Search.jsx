import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Search.module.scss"

const Search = ({ initialValues, validationSchema, onSubmit, placeholder }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      
    >
      {() => (
        <Form className={styles.search} role="search">
          <Field
            type="search"
            className="form-control me-2"
            name="search"
            placeholder={placeholder}
            aria-label="Search"
          />
          <ErrorMessage
            name="search"
            component="div"
            className="error-message"
          />

          <button className="btn btn-outline-primary" type="submit">
            Buscar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export { Search };
