import { createContext, useContext, useReducer, useState } from "react";
import ClientReducer from "../reducer/Client.Reducer";
import {
  ActionAdd,
  ActionRemove,
  ActionGet,
  ActionGetId,
  ActionUpdate,
  ActionFilterClient,
} from "../action/Client.Actions";
import * as API from "../api/client.api";

const ClientContext = createContext();
/*-----------------------------------------------------------------*/
export function ClientProvider({ children }) {
  //useReduce
  const [state, dispatch] = useReducer(ClientReducer, {
    clients: [],
    clientsFilter: [],
    client: {},
  });
  const [reload, setReload] = useState(false);
  /*-----------------------------------------------------------------*/

  //traemos todos los Clientes.
  const findClient = async () => {
    try {
      const services = await API.viewAlls();
      dispatch(ActionGet(services));
    } catch (err) {
      return { status: "error", msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/
  const clientSearch = (filter) => {
    dispatch(ActionFilterClient(filter));
  };
  /*-----------------------------------------------------------------*/

  //Traemos un Cliente por id.
  const findClientId = async (id) => {
    try {
      const service = await API.viewId(id);
      dispatch(ActionGetId(service));
    } catch (err) {
      return { status: "error", msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/
 // Nuevo Cliente
const addClient = async (client) => {
  try {
    const res = await API.add(client);

    if (res.status === 'success') {
      const clients = await API.viewAlls();
      dispatch(ActionAdd(clients));
    }
    return res;
  } catch (err) {
    console.error("Error adding client:", err.message);
    return { status: 'error', msg: err.message };
  }
};
  /*-----------------------------------------------------------------*/

  //Editar Cliente.
  const editClient = async (client) => {
    try {
      const res = await API.edit(client);
  
      if (res.status === 'success') {
        const clients = await API.viewAlls();
        dispatch(ActionUpdate(clients));
      }
      return res;
    } catch (err) {
      console.error("Error adding client:", err.message);
      return { status: 'error', msg: err.message };
    }

  };
  /*-----------------------------------------------------------------*/

  //Elimina un Cliente
  const delClient = async (id) => {
    try {
      const res = await API.del(id);
      dispatch(ActionRemove(id));
      return res;
    } catch (err) {
      return { status: "error", msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/

  //return
  return (
    <ClientContext.Provider
      value={{
        state,
        dispatch,
        findClient,
        findClientId,
        addClient,
        editClient,
        delClient,
        clientSearch,
        reload,
        setReload,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
//retornamos el useContext de AuthContext.
export function useClient() {
  return useContext(ClientContext);
}
