export function ModalDeleteButton(props){
    return(
        <button type="button" className="btn-delete d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target={`#modal${props.id}`}>
            <span className="icon-borrar me-2 f-20"></span>Borrar
        </button>
    )
}
export default ModalDeleteButton