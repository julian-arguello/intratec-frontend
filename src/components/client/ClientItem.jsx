import { Link } from "react-router-dom";

export function ClientItems(props){

    return (
       <div key={props.client._id} className="col">
          <div className="client-card card border-0 ">
             <div className="card-header d-flex justify-content-between align-items-center p-4 text-white">
                <h3 className="h4 mb-0">{props.client.name_busines}</h3>
                <div>
                   <p className="mb-0 text-center">Cuit/Cuil </p>
                   <p className="mb-0">{props.client.cuit_cuil}</p>
                </div>
             </div>
             <div className="card-body text-white p-4 d-flex flex-column justify-content-between">
                <div className="mb-4">
                   <div className="d-flex align-items-center mb-3">
                      <span className="material-icons-outlined me-2">
                         email
                      </span>
                      <h4 className="h6 card-title mb-0">
                         {props.client.email}
                      </h4>
                   </div>
                   <p className="card-text d-flex align-items-center">
                      <span className="material-icons-outlined me-2">
                         phone_iphone
                      </span>
                      {props.client.phone}
                   </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                   {!Object.keys(props.client.services).length ? (
                      <button className="btn btn-secondary" disabled>
                         No tiene servicios
                      </button>
                   ) : (
                      <Link
                         to={`/clientes/servicios/${props.client._id}`}
                         className="d-flex align-items-center px-3 py-2 rounded-4 text-white border bg-transparent btn"
                      >
                         <span className="material-icons-outlined me-2">
                            home_repair_service
                         </span>
                         Servicios
                      </Link>
                   )}
                   <Link
                      to={`/clientes/editar/${props.client._id}?clientName=${props.client.name_busines}`}
                      className="btn d-flex align-items-center text-white border px-3 py-2 rounded-4"
                   >
                      <span className="material-icons-outlined me-2">edit</span>
                      Editar
                   </Link>
                </div>
             </div>
          </div>

          {/* <div className="card text-white bg-black p-sm-3 rounded-4">
             <div className="card-body">
                <h3 className="text-center h5 mb-4">
                   <strong> {props.client.name_busines}</strong>
                </h3>
                <ul className="p-0 mb-3">
                   <li className="d-flex align-items-center mb-3">
                      <span className="icon-telefono f-20 me-3"></span>
                      <span>{props.client.phone}</span>
                   </li>
                   <li className="d-flex align-items-center">
                      <span className="icon-mail icon-client me-3 f-20"></span>
                      <span>{props.client.email}</span>
                   </li>
                </ul>
                <div className="d-flex justify-content-end">
                   <Link
                      to={`/clientes/${props.client._id}`}
                      className="box-proceso rounded-4 text-white d-flex align-items-center justify-content-center px-3 py-2"
                   >
                      <span className="icon-ver me-2"></span>Ver
                   </Link>
                </div>
             </div>
          </div> */}
       </div>
    );
}
export default ClientItems;