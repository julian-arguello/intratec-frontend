import { createContext, useContext, useReducer, useState } from 'react';
import ServiceReducer from '../reducer/Service.Reducer';
import {
  ActionAdd,
  ActionRemove,
  ActionStateRemove,
  ActionStateAdd,
  ActionGet,
  ActionGetId,
  ActionUpdate,
  ActionStateService,
  ActionGetRecent,
  ActionGetStatistics,
  ActionFilterService,
  ActionStateUpdate
} from '../action/Service.Actions';
import * as API from '../api/service.api';

const ServiceContext = createContext();
//------------------------------------------------------------------------------------------------------------------------------------------

export function ServiceProvider({ children }) {
  //useReduce
  //useReducer recibe dos parametros (funcion reduce, {states por defectos})
  const [state, dispatch] = useReducer(ServiceReducer, {
    statistics: {},
    serviceRecent: [],
    services: [],
    servicesFilter: [],
    service: {},
    stateService: [],
  });

  const [filterState, setFilterState] = useState("");
  /*-----------------------------------------------------------------*/

  //Estado de los servicios
  const findStateService = async () => {
    try {
      const services = await API.viewAllsState();
      dispatch(ActionStateService(services));
    } catch (err) {
      return { status: 'error', msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/
  const serviceSearch = (filter) => {
    dispatch(ActionFilterService(filter));
  };
  /*-----------------------------------------------------------------*/

  //traemos todos los servicios
  const findService = async () => {
    try {
      const services = await API.viewAlls();
       dispatch(ActionGet(services));
    } catch (err) {
      return { status: 'error', msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/

  //Traemos un servioco por id
  const findServiceId = async (id) => {
    try {
      const service = await API.viewId(id);
      dispatch(ActionGetId(service));
    } catch (err) {
      return { status: 'error', msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/

  // Traemos los ultimos servicios
  const findServiceRecent = async (cant = 3) => {
    try {
      await API.viewRecent(cant).then((services) =>
        dispatch(ActionGetRecent(services))
      );
    } catch (err) {
      return { status: 'error', msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/

  // Traemos las estadisticas
  const findStatistics = async () => {
    try {
      const statistics = await API.viewStatistics();
      dispatch(ActionGetStatistics(statistics));
    } catch (err) {
      return { status: 'error', msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/
// Nuevo servicio
const addService = async (service) => {
  try {
    const res = await API.add(service);

    if (res.status === 'success') {
      const services = await API.viewAlls();
      dispatch(ActionAdd(services));
    }

    return res;
  } catch (err) {
    console.error("Error adding service:", err.message);
    return { status: 'error', msg: err.message };
  }
};
  /*-----------------------------------------------------------------*/

  //Editar servicio
  const editService = async (service) => {
    try {
      const res = await API.edit(service);
      if (res.status === 'success') {
        dispatch(ActionUpdate(service));
      }
      return res;
    } catch (err) {
      return { status: 'error', msg: err.message || 'Error de red' };
    }
  };
  /*-----------------------------------------------------------------*/

  //Elimina un servicio
  const delService = async (id) => {
    try {
      const res = await API.del(id);
      dispatch(ActionRemove(id));
      return res;
    } catch (err) {
      return { status: 'error', msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/

  //Elimina el estado de un servicio
  const delServiceState = async (id, state) => {
    try {
        const res = await API.delState(id, state);
        if (res.status === 'success') {
          dispatch(ActionStateRemove(id, state));
        }
        return res;
    } catch (err) {
        return { status: 'error', msg: err.message || 'Error de red' };
    }
};
  /*-----------------------------------------------------------------*/
// Agrega un estado a un servicio
const addServiceState = async (id, state, description) => {
  try {
    const res = await API.addState(id, state, description);
    if (res.status === 'success') {
      dispatch(ActionStateAdd(id, state, description));
    }
    return res;
  } catch (err) {
    return { status: 'error', msg: err.message || 'Error de red' };
  }
}
  /*-----------------------------------------------------------------*/
// Actualiza un estado en un servicio
const updateServiceState = async (id, state, date, description) => {
  try {
    const res = await API.updateState(id, state, date, description);

    if (res.status === 'success') {
      dispatch(ActionStateUpdate(id, state, date, description));
    }
    return res;


  } catch (err) {
    return { status: 'error', msg: err.message || 'Error de red' };
  }
};

  /*-----------------------------------------------------------------*/

  //return
  return (
    <ServiceContext.Provider
      value={{
        state,
        dispatch,
        findService,
        findServiceId,
        addService,
        editService,
        findStateService,
        delService,
        findServiceRecent,
        findStatistics,
        serviceSearch,
        filterState, 
        setFilterState,
        delServiceState,
        addServiceState,
        updateServiceState
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
//retornamos el useContext de AuthContext.
export function useService() {
  return useContext(ServiceContext);
}
