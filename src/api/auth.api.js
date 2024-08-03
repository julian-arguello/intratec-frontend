import config from "../config/config";
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Login.

export async function login(email, password){
    return fetch(`${config.api.url}/auth`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
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
}

/*
export async function login(email, password) {
    try {
        console.log('Calling login with', email, password); // Log de inicio de la función
        const res = await fetch(`${config.api.url}/auth`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        console.log('Response received:', res.status, data); // Log de la respuesta

        if (res.status === 200) {
            console.log('Returning data:', data);
            return data; // Asegúrate de que `data` tenga las propiedades `user` y `token`
        } else {
            throw new Error(data.msg || 'Error de autenticación');
        }
    } catch (error) {
        console.error('Error en la solicitud de login:', error);
        throw new Error('Error de red o servidor');
    }
}



/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Recovery.
export async function recovery(email){
    return fetch(`${config.api.url}/auth/recovery`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    })
    .then(async (res) => {
        const data = await res.json()
        console.log(data)
        if(res.status === 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Recovery.
export async function newPass(password, token){
    return fetch(`${config.api.url}/auth/new-password`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({password, token})
    })
    .then(async (res) => {
        const data = await res.json()
        console.log(data)
        if(res.status === 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Recovery.
export async function editPass(passwords){
    return fetch(`${config.api.url}/auth/new-password`,{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify(passwords)
    })
    .then(async (res) => {
        const data = await res.json()
        console.log(data)
        if(res.status === 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/