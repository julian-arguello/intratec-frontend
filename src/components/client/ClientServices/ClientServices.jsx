import { useEffect, useState } from "react";
import { useClient } from "../../../context/Client.Context";
import { useParams } from "react-router-dom";
import ServiceItem from "../../service/ServiceList/ServiceItem/ServiceItem";
import { Navbar } from "../../Layout/Navbar/Navbar";
import { ServiceNewButton } from "../../Buttons/ServiceNewButton";
import styles from "./ClientServices.module.scss";
import { Loader } from "../../UI/Loader/Loader";
import { Pagination } from '../../UI/Pagination/Pagination';
import { WithoutResults } from "../../UI/withoutResults/withoutResults";

export const ClientServices = () => {
  const { id } = useParams();
  const { state, findClientId } = useClient();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);


  useEffect(() => {
    findClientId(id).then(() => {
      setLoading(false);
    });
    setCurrentPage(1);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = state.client.services?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
   <section className="d-flex flex-column w-100">
     <Navbar>
       <ServiceNewButton />
     </Navbar>
     <main className={styles.main}>
       {!loading ? (
         <div className={styles.serviceBox}>
           <h2 className={styles.title}>Servicios asociados a {state.client.name_busines}</h2>
           {currentServices.length === 0 ? (
             <WithoutResults message="No se encontraron servicios para mostrar"/>
           ) : (
             currentServices.reverse().map((service) => (
               <ServiceItem
                 key={service._id}
                 service={service}
                 clientDetail={true}
               />
             ))
           )}
           <Pagination
             itemsPerPage={itemsPerPage}
             totalItems={state.client.services.length}
             paginate={paginate}
             currentPage={currentPage}
             className={`${styles.pagination}`}
           />
         </div>
       ) : (
         <div className={`loaderBox ${styles.loaderBox}`}>
           <Loader />
         </div>
       )}
     </main>
   </section>
 );
};
