import ServiceItem from "./ServiceItem/ServiceItem";
import { useService } from "../../context/Service.Context";

export function ServiceList() {
  const { state, filterState } = useService();

  const filteredServices = state.servicesFilter.filter(
    (service) => !filterState || service.state === filterState
  );

  return (
    <div>
      {filteredServices.length === 0 ? (
        <p>No se encontraron servicios para mostrar</p>
      ) : (
        filteredServices.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))
      )}
    </div>
  );
}
export default ServiceList;
