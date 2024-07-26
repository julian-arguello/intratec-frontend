import { useEffect, useState } from 'react';
import ServiceItem from "./ServiceItem/ServiceItem";
import { useService } from "../../../context/Service.Context";
import { Loader } from "../../UI/Loader/Loader";
import styles from "./ServiceList.module.scss";
import { WithoutResults } from "../../UI/withoutResults/withoutResults";
import { Pagination } from "../../UI/Pagination/Pagination";

export function ServiceList() {
  const { state, filterState, findService } = useService();

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const filteredServices = state.servicesFilter.filter(
    (service) => !filterState || service.state === filterState
  );

  useEffect(() => {
    findService().then(() => setLoading(false));
  }, []);

  // Calcular servicios a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = filteredServices.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    !loading ? 
    <div className={styles.serviceBox}>
      {currentServices.length === 0 ? (
        <WithoutResults message="No se encontraron servicios para mostrar"/>
      ) : (
        currentServices.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredServices.length}
        paginate={paginate}
        currentPage={currentPage}
        className={`${styles.pagination}`}
      />
    </div>
    :
    <div className={`loaderBox ${styles.loaderBox}`}>
      <Loader /> 
    </div>
  );
}
export default ServiceList;
