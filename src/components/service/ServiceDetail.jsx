import { stateClass } from '../../services/service.state';
import { Link } from 'react-router-dom';
import { ModalDeleteButton } from './ModalDeleate/ModalDeleateButton';
import { ModalDelete } from './ModalDeleate/ModalDelete';
import RoleAdmin from '../authRole/RoleAdmin';
import { formatRelative, subDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { BackButton } from '../../components/buttons/BackButton';

export function ServiceDetail(props) {
   return (
      <>
         <div className="row align-items-center mb-5 mt-3">
            <h2 className="col-6 col-md-4 text-end text-sm-start h3 order-1 order-md-0 mb-0">
               Detalle del servicio
            </h2>
            <div className="col-6 col-md-4 order-0 order-md-1">
               <div className="float-md-end">
                  <BackButton refer={'/servicios'} />
               </div>
            </div>
         </div>
         <div className="row mb-4">
            <div className="col-6 col-md-4">
               <div className="bg-light p-3 rounded">
                  <h3 className="h5 mb-3">Técnico</h3>
                  <div className="d-flex align-items-center">
                     <span className="material-icons-outlined me-2">
                        assignment_ind
                     </span>
                     <strong>
                        {props.service.user.name +
                           ' ' +
                           props.service.user.lastname}
                     </strong>
                  </div>
               </div>
            </div>
            <div className="col-6 col-md-4">
               <div className="bg-light p-3 rounded">
                  <h3 className="h5 mb-3">Fecha ingreso</h3>
                  <div className="d-flex align-items-center">
                     <span className="material-icons-outlined me-2">
                        history
                     </span>
                     <span className="spanTime d-block">
                        {formatRelative(
                           new Date(props.service.create_at),
                           new Date(),
                           {
                              locale: es,
                           }
                        )}
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div className="row mb-4">
            <div className="col-6 col-md-4">
               <div className="bg-light p-3 rounded">
                  <h3 className="h5 mb-3">Cliente</h3>
                  <p className="mb-0">{props.service.client.name_busines}</p>
               </div>
            </div>
            <div className="col-6 col-md-4">
               <div
                  className={
                     stateClass(props.service.state) +
                     ' p-2 rounded text-white text-center h-100 d-flex justify-content-center'
                  }
               >
                  <div className="d-flex justify-content-center align-items-center align-content-center">
                     <span className="material-icons-outlined me-2">
                        call_received
                     </span>
                     <p className="mb-0">{props.service.state}</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-12 col-md-8">
               <hr className="hr my-5" />
            </div>
         </div>
         <div className="row mb-5">
            <div className="col-6 col-md-4">
               <div className="p-3 bg-light rounded">
                  <h3 className="h5 mb-3">Marca</h3>
                  <p className="mb-0">{props.service.brand}</p>
               </div>
            </div>
            <div className="col-6 col-md-4">
               <div className="p-3 bg-light rounded">
                  <h3 className="h5 mb-3">Modelo</h3>
                  <p className="mb-0">{props.service.model}</p>
               </div>
            </div>
            <div className="col-12 col-md-8">
               <div className="p-3 bg-light rounded mt-3">
                  <h3 className="h5 mb-3">N° de serie</h3>
                  <p className="mb-0">{props.service.serial_number}</p>
               </div>
            </div>
            <div className="col-12 col-md-8">
               <div className="mt-5">
                  <h3 className="h5 mb-4">Descripción del inconveniente</h3>
                  <div className="bg-light rounded p-4">
                     <p className="mb-0">"{props.service.description}"</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-12 col-md-8">
               <hr className="hr my-5" />
            </div>
         </div>
         <RoleAdmin>
            <ModalDelete id={props.service._id} />
         </RoleAdmin>
         <RoleAdmin>
            <div className="row">
               <div className="col-6 col-md-4">
                  <ModalDeleteButton id={props.service._id} />
               </div>
               <div className="col-6 col-md-4">
                  <Link
                     to={`/servicios/editar/${props.service._id}`}
                     className="btn-edit d-flex justify-content-center align-items-center float-end"
                  >
                     <span className="material-icons-outlined me-2">edit</span>
                     Editar
                  </Link>
               </div>
            </div>
         </RoleAdmin>
      </>
   );
}
export default ServiceDetail;
