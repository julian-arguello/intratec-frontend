import { createContext, useContext, useReducer } from "react";
import UserReducer from "../reducer/User.Reducer";

import { ActionAdd, ActionRemove, ActionGet, ActionGetId, ActionUpdate, ActionGetRole } from "../action/User.Actions"

import * as API from '../api/user.api';

const UserContext = createContext();

/*-----------------------------------------------------------------*/

export function UserProvider({ children }){
    
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(UserReducer, { users:[], user: {}, roles:[] })
    /*-----------------------------------------------------------------*/
    
    //traemos todos los Users.
    const findUser = async () =>{
        try{
            const users = await API.viewAlls()
            dispatch(ActionGet(users))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/

    //Traemos un User por id.
    const findUserId = async (id) =>{
        try{
            const user = await API.viewId(id)
            dispatch(ActionGetId(user))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/

    //Nuevo User.
    const addUser = async (user) =>{
        try{
            const res = await API.add(user)
            dispatch(ActionAdd(user))
            return res
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }   
    }
    /*-----------------------------------------------------------------*/

    //Editar User.
    const editUser = async (user, SA) =>{
        try{
            const res = await API.edit(user, SA)
            dispatch(ActionUpdate(user))
            return res
        }
        catch(err){
            return {status: "error", msg: err.message} 
        } 
    }
    /*-----------------------------------------------------------------*/

    //Elimina un User
    const delUser = async (id) =>{
        try{
            const res = await API.del(id)
            dispatch(ActionRemove(id))
            return res
        }
        catch(err){
            return {status: "error", msg: err.message} 
        } 
    }
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

//traemos todos los roles.
const findRole = async () =>{
    try{
        const roles = await API.viewRole()
        dispatch(ActionGetRole(roles))
        console.log("state" ,roles)
        return roles
    }
    catch(err){
        return {status: "error", msg: err.message} 
    }
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/

    //return
    return(
        <UserContext.Provider value={{ state, dispatch, findUser, findUserId, addUser, editUser, delUser, findRole }}>
            {children}
        </UserContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useUser(){
    return useContext(UserContext);
}