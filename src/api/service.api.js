import config from "../config/config";

/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Trae los estados de los servios.
export async function viewAllsState(){
    return fetch(`${config.api.url}/state`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
    })
    .then(async (res) => {
       return await res.json()
    })
    .catch(err => {
        throw new Error(err.message)
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Alls.
export async function viewAlls(){
    return fetch(`${config.api.url}/servicios`,{
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
//trae un servico
export async function viewId(id){
    return fetch(`${config.api.url}/servicios/${id}`,{
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
//trae los ultimos servicios 
export async function viewRecent(cant){
    return fetch(`${config.api.url}/servicios/recent/${cant}`,{
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
//trae las estadisticas 
export async function viewStatistics(){
    return fetch(`${config.api.url}/servicios/statistics`,{
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
//Crea un servicio
export async function add(service) {
    return fetch(`${config.api.url}/servicios`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token'),
      },
      body: JSON.stringify(service),
    })
    .then(async (res) => {
      const data = await res.json();
      if (res.status === 200) {
        return data; 
      } else {
        throw new Error(data.msg);
      }
    })
    .catch(err => {
      throw new Error(err.message);
    });
  }
  
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Edita un servicio
export async function edit(service){
    return fetch(`${config.api.url}/servicios/${service._id}`,{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify(service)
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
//Elimina un servicio
export async function del(id){
    return fetch(`${config.api.url}/servicios/${id}`,{
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
//Elimina el estado de un servicio
export async function delState(id, state) {
    try {
        const response = await fetch(`${config.api.url}/servicios/estado/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            },
            body: JSON.stringify({ state: state })
        });

        const data = await response.json();

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data.msg || 'Error al eliminar el estado');
        }
    } catch (err) {
        return { status: 'error', msg: err.message || 'Error de red' };
    }
}
/*-----------------------------------------------------------------*/    
//Crea el estado de un servicio
export async function addState(id, state, description) {
    try {
        const response = await fetch(`${config.api.url}/servicios/estado/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            },
            body: JSON.stringify({ state: state, description: description })
        });

        const data = await response.json();

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data.msg || 'Error al agregar el estado');
        }
    } catch (err) {
        return { status: 'error', msg: err.message || 'Error de red' };
    }
}
/*-----------------------------------------------------------------*/ 
// Actualiza el estado de un servicio
export async function updateState(id, state, date, description) {
    try {
        const response = await fetch(`${config.api.url}/servicios/estado/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            },
            body: JSON.stringify({ state, description, date })
        });

        const data = await response.json();

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data.msg || 'Error al actualizar el estado');
        }
    } catch (err) {
        return { status: 'error', msg: err.message || 'Error de red' };
    }
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/