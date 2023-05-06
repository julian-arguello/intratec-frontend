
import { Link } from 'react-router-dom';
import { stateClass } from '../../services/service.state';
import { formatDistance } from 'date-fns'
import { es } from 'date-fns/locale'

export function ServiceItem(props) {

  return (
    <div className="col">
      <div className={stateClass(props.service.state) + ' card text-white p-sm-3'}>
        <div className="card-body">
          <div className='h6 mb-2 estado'>{props.service.state}</div>
          <div className="d-flex justify-content-between my-4">
            <span className='h4'>Ingreso núm {props.service.service_id}</span>
            {!props.clientDetail ? <span className='h4'>Cliente</span> : ''}
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className='d-flex align-items-center'>
              <span className="icon-perfil me-3 f-30"></span>
              <span>{props.service.user.name + ' ' + props.service.user.lastname}</span>
            </div>
            {!props.clientDetail && <span>{props.service.client.name_busines}</span>}
          </div>
          <div className='d-flex align-items-center mb-2'>
            <span className="icon-equipo me-3 f-30"></span>
            {props.service.brand + ' (' + props.service.model + ')'}
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className='d-flex align-items-center'>
              <small>Hace {formatDistance(new Date(props.service.create_at), new Date(), { locale: es })}</small>
            </div>
            <Link to={`/servicios/${props.service._id}`} className="box-proceso rounded-4 text-white d-flex align-items-center justify-content-center px-3 py-2">
              <span className="icon-ver me-2"></span>Ver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServiceItem;