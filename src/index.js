import React from "react";
import ReactDOM from "react-dom/client";
import "@coreui/coreui/dist/css/coreui.min.css";
import App from "./App";

//import 'semantic-ui-css/semantic.min.css';

//Router
import { BrowserRouter } from "react-router-dom";
//Auth
import { AuthProvider } from "./context/Auth.Context";
//Nofity
import { NotifyProvider } from "./context/Notify.Context";
//Service
import { ServiceProvider } from "./context/Service.Context";
//Client
import { ClientProvider } from "./context/Client.Context";
//user
import { UserProvider } from "./context/User.Context";

import { NavProvider } from "./context/Navigate.Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <NotifyProvider>
          <ClientProvider>
            <ServiceProvider>
              <NavProvider>
                <App />
              </NavProvider>
            </ServiceProvider>
          </ClientProvider>
        </NotifyProvider>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>
);
