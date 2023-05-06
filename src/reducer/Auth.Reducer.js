//funcion reducer.
//sate -> con el acedo a los multiples states
//action -> tiene dos parametros {type: (indicaremos la accion a realizar), payload: (valores a modificar)}.
export default function AuthReducer(state, action){
    switch(action.type){
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "LOGIN":
            return{
                ...state,
                isAuth: true,
                user: action.payload,
                error: null,
            };
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "LOGOUT":
            return{
                ...state,
                isAuth: false,
                user: null,
                error: null,
            };
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "UPDATE":
            localStorage.setItem('user', JSON.stringify (
                {
                    ...state.user,
                    name: action.payload.name,
                    lastname: action.payload.lastname
                }
            ))
            return{
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.name,
                    lastname: action.payload.lastname
                }
            }
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        case "ERROR":
            return{
                ...state,
                error: action.payload,
            };
        /*-----------------------------------------------------------------*/    
        /*-----------------------------------------------------------------*/ 
        default:
            return state;
    }
}