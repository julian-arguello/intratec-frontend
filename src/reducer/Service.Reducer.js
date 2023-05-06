export default function ServiceReducer(state, action){
    switch(action.type){
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/   
        case "GET":
            console.log("ServiceReducer->GET", action.payload)
            console.log("ServiceReducer->GET_services", state.services)
            console.log("ServiceReducer->GET_servicesFilter", state.servicesFilter)

            return {
                ...state,
                services:  action.payload,
                servicesFilter: action.payload,
            }
            
            //console.log('services'. state.services)
           // console.log('servicesFilter'. state.servicesFilter)

            
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "GETID":
            console.log("ServiceReducer->GETID")
            return {
                ...state,
                service:  action.payload   
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "GETRECENT":
            console.log("ServiceReducer->GETRECENT -> ", action.payload )
            return {
                ...state,
                serviceRecent:  action.payload   
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "STATISTICS":
            console.log("ServiceReducer->STATISTICS")
            return {
                ...state,
                statistics:  action.payload   
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "ADD":
            console.log("ServiceReducer->ADD")
            return {
                ...state,
                services: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "UPDATE":
            console.log("ServiceReducer->UPDATE")
            return {
                ...state,
                services: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "REMOVE":
            console.log("ServiceReducer->REMOVE")
            return{
                ...state,
                services: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "STATE":
            console.log("service_reducer->STATE")
            return {
                ...state,
                stateService:  action.payload   
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "FILTER":
            console.log("service_reducer->FILTER", state.services)
            return {
                ...state,
                servicesFilter:  action.payload != '' ? state.services.filter(services => {
                    if(isNaN(parseInt(action.payload))){
                        return services.client.name_busines.toLowerCase().trim().includes(action.payload.toLowerCase().trim()) 
                    }else{
                        return services.service_id == action.payload
                    }
                }) : state.services
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/                
        default:
            return state;
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
    }
}