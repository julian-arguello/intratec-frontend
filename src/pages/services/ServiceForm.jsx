import { BackButton } from '../../components/Buttons/BackButton';
import ServiceFormAdd from '../../components/service/ServiceFormAdd';
import ServiceFormEdit from '../../components/service/ServiceFormEdit';

export function ServiceAdd(props) {
  return (
     <div>
        {!props.edit ? (
           <div className="row align-items-center mb-5 mt-3">
              <h2 className="col-6 col-md-4 text-end text-sm-start h3 order-1 order-md-0 mb-0">
                 Nuevo servicio
              </h2>
              <div className="col-6 col-md-4 order-0 order-md-1">
                 <div className="float-md-end">
                    <BackButton />
                 </div>
              </div>
           </div>
        ) : (
           <div className="row align-items-center mb-5 mt-3">
              <h2 className="col-6 col-md-4 text-end text-sm-start h3 order-1 order-md-0 mb-0">
                 Editar servicio
              </h2>
              <div className="col-6 col-md-4 order-0 order-md-1">
                 <div className="float-md-end">
                    <BackButton />
                 </div>
              </div>
           </div>
        )}
        {!props.edit ? <ServiceFormAdd /> : <ServiceFormEdit />}
     </div>
  );
}
export default ServiceAdd;
