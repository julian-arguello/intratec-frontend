/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//GET
export function ActionGet( services ){
    return {
        type: 'GET',
        payload: services
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//GETID
export function ActionGetId( service ){
    return {
        type: 'GETID',
        payload: service
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//GETRECENT
export function ActionGetRecent( services ){
    return {
        type: 'GETRECENT',
        payload: services
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//GETRECENT
export function ActionGetStatistics( statistics ){
    return {
        type: 'STATISTICS',
        payload: statistics
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//ADD
export function ActionAdd( services ){
    return {
        type: 'ADD',
        payload: services
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//REMOVE
export function ActionRemove( id ){
    return {
        type: 'REMOVE',
        payload: id
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//REMOVESTATE
export function ActionStateRemove(id, state) {
    return {
        type: 'REMOVE_STATE',
        payload: { serviceId: id, state: state }
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//ADD_STATE
export function ActionStateAdd(id, state, description) {
    return {
        type: 'ADD_STATE',
        payload: { serviceId: id, state: state, description: description, date: new Date() }
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//ADD_STATE
export const ActionStateUpdate = (id, state, date, description) => ({
    type: 'STATE_UPDATE',
    payload: { id, state, date, description }
  });
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//UPDATE
export function ActionUpdate( service ){
    return {
        type: 'UPDATE',
        payload: service
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//STATE
export function ActionStateService( states ){
    return {
        type: 'STATE',
        payload: states
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//FILTER
export function ActionFilterService( states ){
    return {
        type: 'FILTER',
        payload: states
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/