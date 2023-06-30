export function Loading() {

    return (
       <div
          className="d-flex justify-content-center align-items-center"
          id="spinner"
       >
          <div className="spinner-border" role="status">
             <span className="visually-hidden">Cargando...</span>
          </div>
       </div>
    );
}
export default Loading