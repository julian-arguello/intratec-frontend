import { Link } from 'react-router-dom';
import { ModalDeleteButton } from './ModalDeleate/ModalDeleateButton';
import { ModalDelete } from './ModalDeleate/ModalDelete';
import ServiceItem from '../service/ServiceItem';
import RoleAdmin from '../authRole/RoleAdmin';
import RoleSuperAdmin from '../authRole/RoleSuperAdmin';
import { useAuth } from '../../context/Auth.Context';

export function ClientDetail(props){
    const { state } = useAuth();
    
    return(
     <div className='pt-5 pt-sm-0'>
        <h2 className='my-5 text-center text-sm-start'>Detalle de { props.client.name_busines }</h2>
        <Link to={`/clientes`} className={ state.user.role.role_name == 'super_admin' ? ''
             + "btn-back position-details-back text-center" : "btn-back position-back-rol text-center"}>
            <span className="icon-atras f-20 me-2"></span>Atrás
        </Link>
        <ul className='row ps-0 mb-5'>
            <li className='col-12 col-sm-3 d-flex flex-column justify-content-between mb-5 mb-sm-0'>
                <h3 className='h4 mb-3 text-center text-sm-start'>Cuil / Cuit</h3>
                <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                    <span className='icon-cuil me-3 f-30'></span>
                    <p className='mb-0'>{ props.client.cuit_cuil }</p>
                </div>
            </li>
            <li className="col-12 col-sm-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start mb-5 mb-sm-0">
                <h3 className='h4 mb-3 text-center text-sm-start'>Teléfono</h3>
                <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                    <span className='icon-telefono me-3 f-30'></span>
                    <p className='mb-0'>{ props.client.phone }</p>
                </div>
            </li>
            <li className="col col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3 text-center text-sm-start'>Correo</h3>
                <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                    <span className='me-3 icon-mail f-30'></span>
                    <p className='mb-0'>{ props.client.email }</p>
                </div>
            </li>
        </ul>
        <hr className='hr'/>
        <h3 className='my-5'>Servicios asociados</h3>
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 gy-5 gx-0 gx-sm-5 mb-5 mb-sm-0">
            {(props.client.services.length == 0) && <p>Aún no tiene servicios asociados</p>}
            {props.client.services.map((service)=>(
                <ServiceItem key={service._id} service={service} clientDetail={true}/>
            ))}
        </div>
        <RoleAdmin>
            <RoleSuperAdmin>
                <ModalDeleteButton id={props.client._id} />
            </RoleSuperAdmin>
            <Link to={`/clientes/editar/${props.client._id}`} className="btn-add btn-edit d-flex justify-content-center align-items-center">
                <span className="icon-editar f-20 me-2"></span>Editar
            </Link>
        </RoleAdmin>
        <RoleAdmin>
            <ModalDelete id={props.client._id} />
        </RoleAdmin>
     </div>
    )
}
export default ClientDetail