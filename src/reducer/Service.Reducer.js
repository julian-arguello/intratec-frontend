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
        services: [],
      };
    /*-----------------------------------------------------------------*/
    /*-----------------------------------------------------------------*/
    case "UPDATE":
      return {
        ...state,
        services: [],
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
