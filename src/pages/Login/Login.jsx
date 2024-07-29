import { useState } from "react";
import { useAuth } from "../../context/Auth.Context";
import { Formik, Form } from "formik";
import { CustomField } from "../../components/UI/Form/CustomField/CustomField";
import { PasswordField } from "../../components/UI/Form/PasswordField/PasswordField";
import { schemaLogin } from "../../utils/validate";
import imagenes from "../../assets/images";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { Loader } from "../../components/UI/Loader/Loader";


function Login() {
  const { state, login } = useAuth();
  const [loading, setLoading] = useState(false);

  return (
    <section className={styles.background}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schemaLogin}
        onSubmit={async (data) => {
          setLoading(true);
          try {
            await login(data.email, data.password);
            setLoading(false);
          } catch (error) {
            setLoading(false);
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
              <h2 className="mb-4">Ingresar</h2>

              <CustomField
                id="emailLogin"
                label="Correo electrónico"
                type="text"
                name="email"
                placeholder="Correo@mail.com"
                classNamem="mb-4"
                classNamemField={`form-control "mb-4 ${touched.email && errors.email ? "is-invalid " : " "}`}
                error={errors.email}
                touched={touched.email}
              />

              <PasswordField
                id="passLogin"
                label="Contraseña"
                name="password"
                classNamem="mb-4"
                classNamemField={`form-control "mb-4 ${touched.password && errors.password ? "is-invalid " : " "}`}
                error={errors.password}
                touched={touched.password}
              />

              <div className="w-100">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn btn-primary w-100 mb-3 d-flex justify-content-center align-items-center ${styles.buttonSubmit}`}
                >
                  {loading ? <Loader/> : "Iniciar sesión"}
                </button>

                {state.error && (
                  <div className="form-text text-danger w-100 mb-2">
                    {state.error}
                  </div>
                )}

                <Link
                  to="/recuperar-usuario"
                  className="d-block text-center link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover w-100"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Login;
