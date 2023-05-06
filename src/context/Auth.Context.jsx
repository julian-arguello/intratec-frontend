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
    const login = async (email, password) =>{
        const res = API.login(email, password)
        .then((data)=>{
            localStorage.setItem('auth-token', data.token)
            localStorage.setItem('user', JSON.stringify (data.user))
            dispatch(ActionLogin(data.user))
            return res
        })
        .catch(function(err){
            dispatch(ActionError(err.message))
        })
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