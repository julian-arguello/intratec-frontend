import config from "../config/config";

/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Trae los users.
export async function viewAlls(){
    return fetch(`${config.api.url}/usuarios`,{
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
    return fetch(`${config.api.url}/usuarios/${id}`,{
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
//Trae los roles.
export async function viewRole(){
    return fetch(`${config.api.url}/usuarios/roles`,{
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
        }else{
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
export async function add(usuarios){
    return fetch(`${config.api.url}/usuarios`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify(usuarios)
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
export async function edit(usuario, editSA = false){
    return fetch(`${config.api.url}/usuarios/${usuario._id}`,{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token'),
            'SA': editSA,
        },
        body: JSON.stringify(usuario)
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
    return fetch(`${config.api.url}/usuarios/${id}`,{
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