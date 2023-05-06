import { Link } from "react-router-dom";

export function ClientItems(props){

    return(
        <div key={props.client._id} className="col">
            <div className="card text-white bg-black p-sm-3 rounded-4">
                <div className="card-body">
                    <h3 className='text-center h5 mb-4'>
                        <strong> {props.client.name_busines}</strong>
                    </h3>
                    <ul className='p-0 mb-3'>
                        <li className='d-flex align-items-center mb-3'>
                            <span className="icon-telefono f-20 me-3"></span>
                            <span>{props.client.phone}</span>
                        </li>
                        <li className='d-flex align-items-center'>
                            <span className="icon-mail icon-client me-3 f-20"></span>
                            <span>{props.client.email}</span>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-end">
                        <Link to={`/clientes/${props.client._id}`} className="box-proceso rounded-4 text-white d-flex align-items-center justify-content-center px-3 py-2">
                            <span className="icon-ver me-2"></span>Ver
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientItems;