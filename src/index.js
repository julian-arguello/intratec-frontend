import React from 'react';
import ReactDOM from 'react-dom/client';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

//import 'semantic-ui-css/semantic.min.css';

//Router
import { BrowserRouter } from 'react-router-dom';
//Auth
import { AuthProvider } from './context/Auth.Context';
//Nofity
import { NotifyProvider } from './context/Notify.Context';
//Service
import { ServiceProvider } from './context/Service.Context';
//Client
import { ClientProvider } from './context/Client.Context';
//user
import { UserProvider } from './context/User.Context';

console.log("index")
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <NotifyProvider>
          <ClientProvider>
            <ServiceProvider>
              <App />
            </ServiceProvider>
          </ClientProvider>
        </NotifyProvider>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>
);