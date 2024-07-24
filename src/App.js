import "./scss/App.scss";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/Auth.Context";

import { Layout } from "./components/Layout/Layout.jsx";

function App() {
  //Autenticación--------------------------
  const auth = useAuth();
  let navigate = useNavigate();
  let location = useLocation();

  //consultamos si al montar el componente el estado de auth.isAuth.
  //esto se ejecuta cada ves que se modificque auth.state.
  useEffect(() => {
    if (auth.state.isAuth) {
      if (location.pathname != "/perfil") {
        navigate("/inicio");
      }
    }
  }, [auth.state]);

  //Consultamos si tenemos datos en el localstorage para autenticar.
  //esto se ejecuta unicamente al montar el componente, una unica vez.
  useEffect(() => {
    if (localStorage.getItem("auth-token") && localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      auth.dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return <Layout />;
}

export default App;
