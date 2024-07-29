export default function ServiceReducer(state, action) {
  switch (action.type) {
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "GET":
      return {
        ...state,
        services: action.payload,
        servicesFilter: action.payload,
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "GETID":
      return {
        ...state,
        service: action.payload,
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "GETRECENT":
      return {
        ...state,
        serviceRecent: action.payload,
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "STATISTICS":
      return {
        ...state,
        statistics: action.payload,
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "ADD":
      return {
        ...state,
        services: action.payload,
        servicesFilter: action.payload,
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case 'UPDATE':
      return {
        ...state,
        service: {
          ...state.service,
          ...(action.payload._id === state.service._id ? action.payload : state.service)
        }
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "REMOVE":
      return {
        ...state,
        services: [],
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "REMOVE_STATE":
      const updatedService = { ...state.service };
      const updatedStates = { ...updatedService.states };
      const stateToRemove = action.payload.state;

      delete updatedStates[stateToRemove];
      updatedService.states = updatedStates;

      if (updatedService.state === stateToRemove) {
        const remainingStates = Object.keys(updatedStates);
        updatedService.state = remainingStates[remainingStates.length - 1];
      }

      return {
        ...state,
        service: updatedService,
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "ADD_STATE":
      const updatedServiceAdd = { ...state.service };
      const newState = {
        [action.payload.state]: {
          description: action.payload.description,
          date: action.payload.date,
        },
      };
      const newStates = { ...updatedServiceAdd.states, ...newState };
      updatedServiceAdd.states = newStates;
      updatedServiceAdd.state = action.payload.state;

      return {
        ...state,
        service: updatedServiceAdd,
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "STATE_UPDATE":
      // Copia el estado del servicio actual
      const serviceAfterUpdate = { ...state.service };
    
      // Copia el objeto de estados del servicio
      const statesAfterUpdate = { ...serviceAfterUpdate.states };
    
      console.log("action.payload", action.payload);
      // Extrae la información del payload
      const { state: stateToUpdate, description, date } = action.payload;

      console.log("stateToUpdate ", stateToUpdate)
      console.log("description ", description)
      console.log("date ", date)
    
      // Actualiza o agrega el estado en el objeto de estados
      statesAfterUpdate[stateToUpdate] = {
        description,
        date,
      };
    
      // Actualiza el objeto de servicio con los estados modificados
      serviceAfterUpdate.states = statesAfterUpdate;
    
      // Si el estado actual es el que se está actualizando, asegúrate de que se mantenga como el estado actual
      if (serviceAfterUpdate.state === stateToUpdate) {
        serviceAfterUpdate.state = stateToUpdate;
      }
    
      return {
        ...state,
        service: serviceAfterUpdate,
      };
    

    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "STATE":
      return {
        ...state,
        stateService: action.payload,
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "FILTER":
      return {
        ...state,
        servicesFilter:
          action.payload !== ""
            ? state.services.filter((services) => {
                if (isNaN(parseInt(action.payload))) {
                  return services.client.name_busines
                    .toLowerCase()
                    .trim()
                    .includes(action.payload.toLowerCase().trim());
                } else {
                  return (
                    parseInt(services.service_id) === parseInt(action.payload)
                  );
                }
              })
            : state.services,
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    default:
      return state;
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
  }
}
