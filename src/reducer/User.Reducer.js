export default function UserReducer(state, action){
    switch(action.type){
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/   
        case "GET":
            console.log("UserReducer->GET");
            return {
                ...state,
                users: action.payload,
                UserFilter: action.payload 
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "GETID":
            console.log("UserReducer->GETID")
            return {
                ...state,
                user:  action.payload   
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "GETROLE":
            console.log("UserReducer->GETROLE")
            return {
                ...state,
                roles: action.payload  
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/
        case "ADD":
            console.log("UserReducer->ADD")
            return {
                ...state,
                users: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "UPDATE":
            console.log("UserReducer->UPDATE")
            return {
                ...state,
                users: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "REMOVE":
            console.log("UserReducer->REMOVE")
            return{
                ...state,
                users: []
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/                
        case "FILTER":
            console.log("UserReducer->FILTER");
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