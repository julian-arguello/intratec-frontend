import config from "../config/config";
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Trae los clientes.
export async function viewAlls(){
    return fetch(`${config.api.url}/clientes`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
    })
    .then(async (res) => {
       const data = await res.json()
       if(res.status === 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
    .catch(err => {
        throw new Error(err.message)
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Trae un cliente.
export async function viewId(id){
    return fetch(`${config.api.url}/clientes/${id}`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
    })
    .then(async (res) => {
        const data = await res.json()
        if(res.status === 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
    .catch(err => {
        throw new Error(err.message)
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Crea un cliente.
export async function add(clientes){
    return fetch(`${config.api.url}/clientes`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify(clientes)
    })
    .then(async (res) => {
        const data = await res.json()
        if(res.status === 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
    .catch(err => {
        throw new Error(err.message)
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Edita un cliente.
export async function edit(clientes){
    return fetch(`${config.api.url}/clientes/${clientes._id}`,{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify(clientes)
    })
    .then(async (res) => {
        const data = await res.json()
        if(res.status === 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
    .catch(err => {
        throw new Error(err.message)
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Elimina un cliente.
export async function del(id){
    return fetch(`${config.api.url}/clientes/${id}`,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
    })
    .then(async (res) => {
        const data = await res.json()
        if(res.status === 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
    .catch(err => {
        throw new Error(err.message)
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/