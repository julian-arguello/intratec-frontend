import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import { RecoverPassword } from "../pages/Login/Recover/RecoverPassword";
import { NewPassword } from "../pages/Login/Recover/NewPassword";
import Home from "../pages/Home/Home";
import { Clients } from "../pages/clients/Clients/Clients";
import ClientDetail from "../pages/clients/ClientDetailPage";
import ClientForm from "../pages/clients/ClientForm";
import Services from "../pages/services/Services/Services";
import ServiceDetail from "../pages/services/ServiceDetailPage";
import ServiceForm from "../pages/services/ServiceForm";
import NotAccess from "../pages/NotAccess";
import Profile from "../pages/Profile";
import ProfileEdit from "../components/profile/ProfileEdit";
import UserManage from "../pages/Users/Users";
import PageNotFound from "../pages/PageNotFound";
import AuthRoute from "../components/AuthRoute";
import { ClientServices } from "../components/client/ClientServices";
import UserCreateForm from "../components/users/UserCreateForm";
import UserEditForm from "../components/users/UserEditForm";
import { useAuth } from "../context/Auth.Context";

const RoutesConfig = () => {
  const auth = useAuth();

  const roleAdmin = async () => {
    if (auth.state.isAuth) {
      const role = await auth.state.user.role.role_name;
      return role === "admin" || role === "super_admin";
    }
    return false;
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/recuperar-usuario" element={<RecoverPassword />} />
      <Route path="/recuperar-usuario/:token" element={<NewPassword />} />

      
      <Route
        path="/inicio"
        element={
          <AuthRoute>
            <Home />
          </AuthRoute>
        }
      />
      <Route
        path="/clientes"
        element={
          <AuthRoute>
            <Clients />
          </AuthRoute>
        }
      />
      <Route
        path="/clientes/:id"
        element={
          <AuthRoute>
            <ClientDetail />
          </AuthRoute>
        }
      />
      <Route
        path="/clientes/servicios/:id"
        element={
          <AuthRoute>
            <ClientServices />
          </AuthRoute>
        }
      />
      <Route
        path="/clientes/nuevo"
        element={
          roleAdmin() ? (
            <AuthRoute>
              <ClientForm edit={false} />
            </AuthRoute>
          ) : (
            <NotAccess />
          )
        }
      />
      <Route
        path="/clientes/editar/:id"
        element={
          roleAdmin() ? (
            <AuthRoute>
              <ClientForm edit={true} />
            </AuthRoute>
          ) : (
            <NotAccess />
          )
        }
      />
      <Route
        path="/servicios/"
        element={
          <AuthRoute>
            <Services />
          </AuthRoute>
        }
      />
      <Route
        path="/servicios/:status"
        element={
          <AuthRoute>
            <Services />
          </AuthRoute>
        }
      />


      
      <Route
        path="/servicios/detalle/:id"
        element={
          <AuthRoute>
            <ServiceDetail />
          </AuthRoute>
        }
      />
      <Route
        path="/servicios/nuevo"
        element={
          roleAdmin() ? (
            <AuthRoute>
              <ServiceForm edit={false} />
            </AuthRoute>
          ) : (
            <NotAccess />
          )
        }
      />
      <Route
        path="/servicios/editar/:id"
        element={
          roleAdmin() ? (
            <AuthRoute>
              <ServiceForm edit={true} />
            </AuthRoute>
          ) : (
            <NotAccess />
          )
        }
      />
      <Route
        path="/perfil"
        element={
          <AuthRoute>
            <Profile />
          </AuthRoute>
        }
      />
      <Route
        path="/perfil/editar/:id"
        element={
          <AuthRoute>
            <ProfileEdit />
          </AuthRoute>
        }
      />
      <Route
        path="/usuarios"
        element={
          <AuthRoute>
            <UserManage />
          </AuthRoute>
        }
      />
      <Route
        path="/usuarios/nuevo"
        element={
          <AuthRoute>
            <UserCreateForm />
          </AuthRoute>
        }
      />
      <Route
        path="/usuarios/editar/:id"
        element={
          <AuthRoute>
            <UserEditForm />
          </AuthRoute>
        }
      />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export { RoutesConfig };
