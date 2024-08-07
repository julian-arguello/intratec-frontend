/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//GET
export function ActionGet( users ){
    return {
        type: 'GET',
        payload: users
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//GETID
export function ActionGetId( user ){
    return {
        type: 'GETID',
        payload: user
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//GETROLE
export function ActionGetRole( roles ){
    return {
        type: 'GETROLE',
        payload: roles
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//ADD
export function ActionAdd( users ){
    return {
        type: 'ADD',
        payload: users
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
//UPDATE
export function ActionUpdate( users ){
    return {
        type: 'UPDATE',
        payload: users
    };
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//FILTER
export function ActionFilterUser(searchTerm) {
    return {
      type: 'FILTER',
      payload: searchTerm
    };
  }
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/