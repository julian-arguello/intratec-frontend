export default function ClientReducer(state, action){
    switch(action.type){
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/   
        case "GET":
            return {
                ...state,
                clients: action.payload
                    .slice()
                    .sort((a, b) => 
                        a.name_busines.trim().toLowerCase().localeCompare(b.name_busines.trim().toLowerCase())
                    ),
                clientsFilter: action.payload
                    .slice()
                    .sort((a, b) => 
                        a.name_busines.trim().toLowerCase().localeCompare(b.name_busines.trim().toLowerCase())
                    ),
            };        
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "GETID":
            return {
                ...state,
                client:  action.payload   
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "ADD":
            return {
                ...state,
                clients: action.payload
                    .slice()
                    .sort((a, b) => 
                        a.name_busines.trim().toLowerCase().localeCompare(b.name_busines.trim().toLowerCase())
                    ),
                clientsFilter: action.payload
                    .slice()
                    .sort((a, b) => 
                        a.name_busines.trim().toLowerCase().localeCompare(b.name_busines.trim().toLowerCase())
                    ),
            };
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "UPDATE":
            return {
                ...state,
                clients: action.payload
                    .slice()
                    .sort((a, b) => 
                        a.name_busines.trim().toLowerCase().localeCompare(b.name_busines.trim().toLowerCase())
                    ),
                clientsFilter: action.payload
                    .slice()
                    .sort((a, b) => 
                        a.name_busines.trim().toLowerCase().localeCompare(b.name_busines.trim().toLowerCase())
                    ),
            };
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "REMOVE":
            return{
                ...state,
                clients: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "FILTER":
            return {
                ...state,
                clientsFilter:  action.payload !== '' ? state.clients.filter(clients => {
                    if(isNaN(parseInt(action.payload))){
                        return clients.name_busines.toLowerCase().trim().includes(action.payload.toLowerCase().trim()) 
                    }else{
                        return clients.cuit_cuil.includes(action.payload)
                    }
                }) : state.clients
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/                  
        default:
            return state;
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
    }
}