import { useNotify } from "../context/Notify.Context";

export function Notification(){

    const{ state, notify } = useNotify() 

    if(state.notification.hasOwnProperty('msg')){
        setTimeout( () => notify({}), 8000);
    }    

    return(
        <>
        {state.notification.hasOwnProperty('msg') && 
        
        <div className={`alert ${ state.notification.status == "error" ? "noti-error" :"noti-success"} m-auto d-flex justify-content-between align-items-center notification p-2`} role="alert">
            {state.notification.msg}
            <span className="icon-cancelar" role="button" onClick={()=>(notify({}))}></span>
        </div>
        }        
        </>
    )
}