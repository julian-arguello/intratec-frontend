import { createContext, useContext, useReducer } from "react";
import AuthReducer from "../reducer/Auth.Reducer";
import { ActionLogin, ActionLogout, ActionUpdate ,ActionError } from "../action/Auth.Actions"
import * as API from '../api/auth.api';

const AuthContext = createContext();
//------------------------------------------------------------------------------------------------------------------------------------------

export function AuthProvider({ children }){

    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(AuthReducer, {isAuth:false, user:null, error:null})
    /*-----------------------------------------------------------------*/

    //function login
    
    // const login = (email, password) => {
    //     return API.login(email, password)
    //     .then((data)=>{
    //         localStorage.setItem('auth-token', data.token)
    //         localStorage.setItem('user', JSON.stringify (data.user))
    //         dispatch(ActionLogin(data.user))
    //         return data
    //     })
    //     .catch(function(err){
    //         dispatch(ActionError(err.message))
    //     })
    // }

    
    const login = async (email, password) => {
        try {
            const data = await API.login(email, password); // Esperar la respuesta de API.login
            localStorage.setItem('auth-token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            dispatch(ActionLogin(data.user));
            return data; // Devolver los datos recibidos
        } catch (err) {
            dispatch(ActionError(err.message));
            throw err; // Re-lanzar el error para manejarlo donde se llama
        }
    }

    
    /*-----------------------------------------------------------------*/

    const updateUserAuth = (user) =>{
        try{
            dispatch(ActionUpdate(user))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/

    const logout = () =>{
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user');
        dispatch(ActionLogout())
    }
     /*-----------------------------------------------------------------*/
    const recovery = async (email) =>{
        try{
            const res = await API.recovery(email)
            return res
        }
        catch(err){
            return {status: "error", msg: err.message} 
        } 
    }
    /*-----------------------------------------------------------------*/
    const newPass = async (password, token) =>{
        try{
            const res = await API.newPass(password, token)
            return res
        }
        catch(err){
            return {status: "error", msg: err.message} 
        } 
    }
    /*-----------------------------------------------------------------*/

    //return
    return(
        <AuthContext.Provider value={{ state, dispatch, login, logout, updateUserAuth, recovery, newPass}}>
            {children}
        </AuthContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useAuth(){
    return useContext(AuthContext);
}