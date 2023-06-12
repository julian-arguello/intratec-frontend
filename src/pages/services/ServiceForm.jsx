import { BackButton } from '../../components/buttons/BackButton';
import ServiceFormAdd from '../../components/service/ServiceFormAdd';
import ServiceFormEdit from '../../components/service/ServiceFormEdit';

export function ServiceAdd(props) {
  return (
    <div>
      {!props.edit ? (
        <div className="row align-items-center mb-5 mt-3">
          <h2 className="col-6 col-md-4 text-end text-sm-start h4 order-1 order-md-0 mb-0">
            Nuevo servicio
          </h2>
          <div className="col-6 col-md-4 order-0 order-md-1">
            <div className="float-md-end">
              <BackButton />
            </div>
          </div>
        </div>
      ) : (
        <h2 className="my-5 pt-5 pt-sm-0 text-center text-sm-start">
          Editar servicio
        </h2>
      )}
      {!props.edit ? <ServiceFormAdd /> : <ServiceFormEdit />}
    </div>
  );
}
export default ServiceAdd;
