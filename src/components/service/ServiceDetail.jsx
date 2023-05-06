import {stateClass, stateIcon} from '../../services/service.state';
import { Link } from 'react-router-dom';
import { ModalDeleteButton } from './ModalDeleate/ModalDeleateButton';
import { ModalDelete } from './ModalDeleate/ModalDelete';
import RoleAdmin from '../authRole/RoleAdmin';
import { formatRelative, subDays } from 'date-fns';
import { es } from 'date-fns/locale';

export function ServiceDetail(props){
    return(
     <div className='pt-5 pt-sm-0'>
        <h2 className='my-5 text-center text-sm-start'>Detalle de servicio</h2>
        <Link to={`/servicios`} className="btn-back position-details-back text-center">
            <span className="icon-atras f-20 me-2"></span>Atrás
        </Link>
         <ul className="row ps-0">
            <li className="col-12 col-sm-3 d-flex flex-column justify-content-between mb-5 mb-sm-0">
                <h3 className='h4 mb-3 text-center text-sm-start'>Técnico a cargo</h3>
                <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                    <span className="icon-perfil me-2 f-30"></span>
                    <ul className='ps-2'>
                        <li>
                            <strong>{props.service.user.name}</strong>
                        </li>
                        <li>
                            <strong>{props.service.user.lastname}</strong>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="col-12 col-sm-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start mb-5 mb-sm-0">
                <h3 className='h4 mb-3 text-center text-sm-start'>Fecha de recepción</h3>
                <div className='d-flex align-items-center'>
                    <span className='icon-fecha f-30 me-3'></span>
                    <span className='spanTime d-block'>{formatRelative(new Date(props.service.create_at), new Date(), { locale: es })}</span>
                </div>
            </li>
            <li className="col col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3 text-center text-sm-start'>Estado</h3>
                <div className={stateClass(props.service.state) + ' mb-0 py-2 px-4 rounded-2 text-white'}>
                    
                    <div className="d-flex justify-content-center justify-content-sm-start align-items-center w-100">
                        <span>{props.service.state}</span>
                    <span className={stateIcon(props.service.state) + ' ms-3'}></span>  
                </div>
                </div>
            </li>
         </ul>
         <hr className='hr my-5' />
         <div className="row mb-5 gy-4 gy-sm-0">
            <li className="col-6 col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3'>Cliente</h3>
                <p className='mb-0'>{props.service.client.name_busines}</p>
            </li>
            <li className="col-6 col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3'>Marca</h3>
                <p className='mb-0'>{props.service.brand}</p>
            </li>
            <li className="col-6 col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3'>Modelo</h3>
                <p className='mb-0'>{props.service.model}</p>
            </li>
            <li className="col-6 col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3'>N° de serie</h3>
                <p className='mb-0'>{props.service.serial_number}</p>
            </li>
         </div>
         <div className="row">
            <h3 className='h4 mb-4 text-center text-sm-start'>Descripción del inconveniente</h3>
            <div className='bg-light rounded-4 p-4'>
                <p className='mb-0 text-center text-sm-start'>"{props.service.description}"</p>
            </div>
         </div>
         <RoleAdmin>
            <ModalDelete id={props.service._id} />
         </RoleAdmin>
         <RoleAdmin>
            <ModalDeleteButton id={props.service._id} />
            <Link to={`/servicios/editar/${props.service._id}`} className="btn-add btn-edit d-flex justify-content-center align-items-center">
                <span className="icon-editar f-20 me-2"></span>Editar
            </Link>
        </RoleAdmin>
     </div>
    )
}
export default ServiceDetail