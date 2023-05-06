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
        if(res.status == 200) {
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
        if(res.status == 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/