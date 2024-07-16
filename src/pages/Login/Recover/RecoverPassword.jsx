import { useState } from "react";
import { useAuth } from "../../../context/Auth.Context";
import { useNotify } from "../../../context/Notify.Context";

import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { schemaRecovery } from "../../../services/validate";
import imagenes from "../../../assets/images";
import { CustomField } from "../../../components/UI/Form/CustomField/CustomField";
import { Loader } from "../../../components/UI/Loader/Loader";
import styles from "../Login.module.scss";

import { Notification } from "../../../components/Notification";
import { useNavigate } from "react-router-dom";

const RecoverPassword = () => {
  let navigate = useNavigate();
  const { notify } = useNotify();
  const { recovery } = useAuth();
  const [loading, setLoading] = useState(false);

  return (
    <section className={styles.background}>
      <Notification />

      <Formik
        initialValues={{ email: "" }}
        validationSchema={schemaRecovery}
        onSubmit={async (data) => {
          setLoading(true);
          try {
            await recovery(data.email);
            console.log("recovery", data);

            setLoading(false);

            notify(data);

            if (data.status != "error") {
              navigate("/");
            }
          } catch (error) {
            setLoading(false);
            notify(error);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.boxImages}>
              <h1 className="d-none">Intratec</h1>
              <img src={imagenes.desk} alt="logo" className="img-fluid mb-4" />

              <img
                src={imagenes.edificios}
                alt="edificios"
                className="d-none d-md-inline"
              />
            </div>

            <div className={styles.boxform}>
              <h2 className="mb-4">
                Recuperar <br className="d-none d-md-inline"/> contraseña
              </h2>

              <CustomField
                id="emailLogin"
                label="Correo electrónico"
                type="text"
                name="email"
                placeholder="Correo@mail.com"
                classNamem="mb-4"
                error={errors.email}
                touched={touched.email}
              />

              <div className="w-100">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-100 mb-3"
                >
                  {loading ? <Loader /> : "Recuperar contraseña"}
                </button>

                <Link to="/" className="btn btn-outline-secondary w-100">
                  Cancelar
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export { RecoverPassword };
