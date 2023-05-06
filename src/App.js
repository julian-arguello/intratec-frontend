import './App.scss';
import { useEffect, useState } from 'react';
//Routes
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';

//Pages
import Login from './pages/Login';
import Recovery from './pages/recovery/RecoveryPage';
import NewPassword from './pages/recovery/NewPasswordPage';
import Home from './pages/Home';

import Clients from './pages/clients/Clients';
import ClientDetail from './pages/clients/ClientDetailPage';
import ClientForm from './pages/clients/ClientForm';

import Services from './pages/services/Services';
import ServiceDetail from './pages/services/ServiceDetailPage';
import ServiceForm from './pages/services/ServiceForm';

import NotAccess from './pages/NotAccess';

import Profile from './pages/Profile';
import UserManage from './pages/users/Users';
import PageNotFound from './pages/PageNotFound';

//Components
import AuthRoute from './components/AuthRoute';
import AuthComponent from './components/AuthComponent';
import Navbar from './components/Navbar';

//Context
import { useAuth }  from './context/Auth.Context';

function App() {
  //Autenticación--------------------------
  const auth = useAuth();
  
  let navigate = useNavigate();
  let location = useLocation();

  //consultamos si al montar el componente el estado de auth.isAuth.
  //esto se ejecuta cada ves que se modificque auth.state.
  useEffect(() => {
  if(auth.state.isAuth){
      if(location.pathname != "/perfil"){
        navigate('/inicio')
      }
    }
  }, [auth.state])
  
  //Consultamos si tenemos datos en el localstorage para autenticar.
  //esto se ejecuta unicamente al montar el componente, una unica vez.
  useEffect( () => {
    if(localStorage.getItem('auth-token') && localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      auth.dispatch({type: 'LOGIN', payload: user})
    }
  }, [])

  /*-----------------------------------------------------------------*/    
  /*-----------------------------------------------------------------*/
  //Role
  async function roleAdmin(){
    if(auth.state.isAuth){
      const role = await auth.state.user.role.role_name
      return  ( role === "admin" || role === "super_admin") ?  true :  false
    }
    return false
  }
  /*-----------------------------------------------------------------*/    
  /*-----------------------------------------------------------------*/  
  return (
    <div className="App">
      
      <AuthComponent>
        <Navbar />
      </AuthComponent>

      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/recuperar-usuario' element={<Recovery/>} />
        <Route path='/recuperar-usuario/:token' element={<NewPassword/>} />
        <Route path='/inicio' element={<AuthRoute><Home/></AuthRoute>}/>

        <Route path='/clientes' element={<AuthRoute><Clients/></AuthRoute>}/>
        <Route path='/clientes/:id' element={<AuthRoute><ClientDetail/></AuthRoute>}/>
        <Route path='/clientes/nuevo' element={roleAdmin() ? <AuthRoute><ClientForm edit={false}/></AuthRoute> : <NotAccess />}/>
        <Route path='/clientes/editar/:id' element={roleAdmin() ? <AuthRoute><ClientForm edit={true}/></AuthRoute> : <NotAccess />}/>

          <Route path='/servicios' element={<AuthRoute><Services/></AuthRoute>}/>
          <Route path='/servicios/:id' element={<AuthRoute><ServiceDetail/></AuthRoute>}/>
          <Route path='/servicios/nuevo' element={roleAdmin() ? <AuthRoute><ServiceForm edit={false}/></AuthRoute> : <NotAccess />}/>
          <Route path='/servicios/editar/:id' element={roleAdmin() ? <AuthRoute><ServiceForm edit={true}/></AuthRoute> : <NotAccess />}/>
     
          <Route path='/perfil' element={<AuthRoute><Profile /></AuthRoute>}/>
          <Route path='/usuarios' element={<AuthRoute><UserManage/></AuthRoute>}/>
          <Route path='/404' element={<PageNotFound/>}/>
          <Route path='*' element={<Navigate to='/404'/>} />
        </Routes>

    </div>
  );
}

export default App;
