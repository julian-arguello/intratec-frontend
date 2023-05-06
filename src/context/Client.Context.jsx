import { createContext, useContext, useReducer } from "react";
import ClientReducer from "../reducer/Client.Reducer";
import { ActionAdd, ActionRemove, ActionGet, ActionGetId, ActionUpdate } from "../action/Client.Actions"
import * as API from '../api/client.api';

const ClientContext = createContext();
/*-----------------------------------------------------------------*/

export function ClientProvider({ children }){
    
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(ClientReducer, { clients:[], client: {} })
    /*-----------------------------------------------------------------*/    

    //traemos todos los Clientes.
    const findClient = async () =>{
        try{
            const services = await API.viewAlls()
            dispatch(ActionGet(services))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/

    //Traemos un Cliente por id.
    const findClientId = async (id) =>{
        try{
            const service = await API.viewId(id)
            dispatch(ActionGetId(service))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/

    //Nuevo Cliente.
    const addClient = async (client) =>{
        try{
            const res = await API.add(client)
            dispatch(ActionAdd(client))
            return res
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }   
    }
    /*-----------------------------------------------------------------*/

    //Editar Cliente.
    const editClient = async (client) =>{
        try{
            const res = await API.edit(client)
            dispatch(ActionUpdate(client))
            return res
        }
        catch(err){
            return {status: "error", msg: err.message} 
        } 
    }
    /*-----------------------------------------------------------------*/

    //Elimina un Cliente
    const delClient = async (id) =>{
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

    //return
    return(
        <ClientContext.Provider value={{ state, dispatch, findClient, findClientId, addClient, editClient, delClient }}>
            {children}
        </ClientContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useClient(){
    return useContext(ClientContext);
}