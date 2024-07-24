import { useState } from "react";
import { useAuth } from "../../../context/Auth.Context";
import { useNotify } from "../../../context/Notify.Context";

import { Link, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { schemaNewPassword } from "../../../services/validate";
import imagenes from "../../../assets/images";
import { PasswordField } from "../../../components/UI/Form/PasswordField/PasswordField";
import { Loader } from "../../../components/UI/Loader/Loader";
import styles from "../Login.module.scss";

import { Notification } from "../../../components/Notification";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  let navigate = useNavigate();
  const { notify } = useNotify();
  const { newPass } = useAuth();
  const [loading, setLoading] = useState(false);
  const { token } = useParams();

  return (
    <section className={styles.background}>
      <Notification />

      <Formik
        initialValues={{
          password: "",
          token: token,
        }}
        validationSchema={schemaNewPassword}
        onSubmit={async (data) => {
          setLoading(true);
          try {
            await newPass(data.password, data.token);

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
                Cambiar <br className="d-none d-md-inline"/> contraseña
              </h2>

              <PasswordField
                id="passLogin"
                label="Nueva contraseña"
                name="password"
                classNamem="mb-4"
                error={errors.password}
                touched={touched.password}
              />

              <div className="w-100">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-100 mb-3 d-flex justify-content-center align-items-center"
                >
                  {loading ? <Loader /> : "Cambiar contraseña"}
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

export { NewPassword };
