import { useEffect, useState } from 'react';

import ServiceItem from "./ServiceItem/ServiceItem";
import { useService } from "../../../context/Service.Context";
import { Loader } from "../../UI/Loader/Loader";
import styles from "./ServiceList.module.scss"

export function ServiceList() {
  const { state, filterState, findService } = useService();

  const [loading, setLoading] = useState(true);

  const filteredServices = state.servicesFilter.filter(
    (service) => !filterState || service.state === filterState
  );


  useEffect(() => {
    findService().then(() => setLoading(false));
  }, []);


  return (
    !loading ? 
    <div className={styles.serviceBox}>
      {filteredServices.length === 0 ? (
        <p>No se encontraron servicios para mostrar</p>
      ) : (
        filteredServices.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))
      )}
    </div>

    :
    <div className={`loaderBox ${styles.loaderBox}`}>
      <Loader /> 
    </div>

  );
}
export default ServiceList;
