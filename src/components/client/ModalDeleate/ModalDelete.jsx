import { useNavigate  } from 'react-router-dom';
import { useClient } from '../../../context/Client.Context';
import { useNotify } from '../../../context/Notify.Context';

export function ModalDelete(props){

    let navigate = useNavigate();
    const { delClient } = useClient()
    const{ notify } = useNotify()

    function remove(){
        console.log("elimino Cliente id *-> ", props.id);
        delClient(props.id)
        .then(()=>{
            notify({msj: 'El cliente se borró correctamente.'})
            navigate('/clientes')
        })
    }

    return(
        <div className="modal fade" id={`modal${props.id}`}  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Eliminar Cliente</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">¿Estás a punto de eliminar el cliente, estás seguro?</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>remove()}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalDelete