import { createContext, useContext, useReducer } from "react";
import ServiceReducer from "../reducer/Service.Reducer";
import { ActionAdd, ActionRemove, ActionGet, ActionGetId, ActionUpdate, ActionStateService, ActionGetRecent, ActionGetStatistics, ActionFilterService } from "../action/Service.Actions"
import * as API from '../api/service.api';

const ServiceContext = createContext();
//------------------------------------------------------------------------------------------------------------------------------------------

export function ServiceProvider({ children }){

    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(ServiceReducer, { statistics: {}, serviceRecent: [], services: [], servicesFilter: [], service: {}, stateService: []})
    /*-----------------------------------------------------------------*/

    //Estado de los servicios
    const findStateService = async () =>{
        try{
        const services = await API.viewAllsState()
        dispatch(ActionStateService(services))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/   
    const serviceSearch = (filter) =>{
        dispatch(ActionFilterService(filter))
    }
        
    /*-----------------------------------------------------------------*/    

    //traemos todos los servicios
    const findService = async () =>{
        try{
            const services = await API.viewAlls()
            dispatch(ActionGet(services))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/

    //Traemos un servioco por id
    const findServiceId = async (id) =>{
        try{
            const service = await API.viewId(id)
            dispatch(ActionGetId(service))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/

    // Traemos los ultimos servicios
    const findServiceRecent = async (cant = 2) =>{
        try{
            await API.viewRecent(cant)
            .then((services) => dispatch(ActionGetRecent(services)))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/

    // Traemos las estadisticas
    const findStatistics = async () =>{
        try{
            const statistics = await API.viewStatistics()
            dispatch(ActionGetStatistics(statistics))
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }
    }
    /*-----------------------------------------------------------------*/

    //Nuevo servicio
    const addService = async (service) =>{
        try{
            const res = await API.add(service)
            dispatch(ActionAdd(service))
            return res
        }
        catch(err){
            return {status: "error", msg: err.message} 
        }   
    }
    /*-----------------------------------------------------------------*/

    //Editar servicio
    const editService = async (service) =>{
        try{
            const res = await API.edit(service)
            dispatch(ActionUpdate(service))
            return res
        }
        catch(err){
        return {status: "error", msg: err.message}  
        } 
    }
    /*-----------------------------------------------------------------*/

    //Elimina un servicio
    const delService = async (id) =>{
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
        <ServiceContext.Provider value={{ state, dispatch, findService, findServiceId, addService, editService, findStateService, delService, findServiceRecent, findStatistics, serviceSearch }}>
            {children}
        </ServiceContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useService(){
    return useContext(ServiceContext);
}