export function ModalDeleteButton(props){
    return (
       <button
          type="button"
          className="btn-delete d-flex justify-content-center align-items-center"
          data-bs-toggle="modal"
          data-bs-target={`#modal${props.id}`}
       >
          <span className="material-icons-outlined me-2">delete</span>
          Borrar
       </button>
    );
}
export default ModalDeleteButton