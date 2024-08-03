export default function UserReducer(state, action){
    switch(action.type){
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/   
        case "GET":
            return {
                ...state,
                users: action.payload,
                UserFilter: action.payload 
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "GETID":
            return {
                ...state,
                user:  action.payload   
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "GETROLE":
            return {
                ...state,
                roles: action.payload  
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/
        case "ADD":
            return {
                ...state,
                users: action.payload,
                UserFilter: action.payload,
            };
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "UPDATE":
            return {
                ...state,
                users: action.payload,
                UserFilter: action.payload,
            };
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "REMOVE":
            return{
                ...state,
                users: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/                
        case "FILTER":
            return {
                ...state,
                UserFilter: action.payload === '' ? state.users : state.users.filter(user => {
                    const searchTerm = action.payload.toLowerCase().trim();
                    const userName = `${user.name.toLowerCase()} ${user.lastname.toLowerCase()}`.trim();
                    
                    return userName.includes(searchTerm) || user.email.toLowerCase().includes(searchTerm);
                })
            };
        
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/                
        default:
            return state;
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
    }
}