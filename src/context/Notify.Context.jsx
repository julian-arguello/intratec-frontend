import { createContext, useContext, useReducer } from "react";
import { ActionNotify } from "../action/Notify.Actions";
import NotifyReducer from "../reducer/Notify.Reducer";

const NotifyContext = createContext();
//------------------------------------------------------------------------------------------------------------------------------------------

export function NotifyProvider({ children }){
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(NotifyReducer, { notification: {} })

    const notify = (notification) =>{
        dispatch(ActionNotify(notification))
    }

    //return
    return(
        <NotifyContext.Provider value={{ state, dispatch, notify}}>
            {children}
        </NotifyContext.Provider>
    );
}
//retornamos el useContext de useNotify.
export function useNotify(){
    return useContext(NotifyContext);
}