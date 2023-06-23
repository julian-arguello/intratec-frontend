import { Link } from 'react-router-dom';
import { stateClass } from '../../services/service.state';
import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';
import { ViewItemButton } from '../buttons/ViewItemButton';

export function ServiceItem(props) {
  return (
     <div className="col">
        <div
           className={
              stateClass(props.service.state) + ' card text-white p-sm-3'
           }
        >
           <div className="card-body">
              <div className="h6 mb-2 estado">{props.service.state}</div>
              <div className="d-flex justify-content-between my-4">
                 <span className="h5">N° {props.service.service_id}</span>
                 {/* {!props.clientDetail ? <span className="h5">Cliente</span> : ''} */}
                 {!props.clientDetail && (
                    <span className="text-box-card text-end">
                       {props.service.client.name_busines}
                    </span>
                 )}
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                 <div className="d-flex align-items-center">
                    <span className="material-icons-outlined me-2">
                       assignment_ind
                    </span>
                    <span className="text-box-card">
                       {props.service.user.name +
                          ' ' +
                          props.service.user.lastname}
                    </span>
                 </div>
                 {/* {!props.clientDetail && (
              <span>{props.service.client.name_busines}</span>
            )} */}
              </div>
              <div className="d-flex align-items-center mb-5">
                 <span className="material-icons-outlined me-2">
                    inventory_2
                 </span>
                 <span className="text-box-card">
                    {props.service.brand + ' (' + props.service.model + ')'}
                 </span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                 <div className="d-flex align-items-center">
                    <small>
                       Hace{' '}
                       {formatDistance(
                          new Date(props.service.create_at),
                          new Date(),
                          {
                             locale: es,
                          }
                       )}
                    </small>
                 </div>
                 <ViewItemButton id={props.service._id} />
              </div>
           </div>
        </div>
     </div>
  );
}
export default ServiceItem;
