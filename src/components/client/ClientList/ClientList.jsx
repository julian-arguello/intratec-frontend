import { useEffect, useState } from 'react';
import ClientItem from './ClientItem/ClientItem';
import { useClient } from '../../../context/Client.Context';
import { Loader } from '../../UI/Loader/Loader';
import styles from './ClientList.module.scss';
import { Pagination } from '../../UI/Pagination/Pagination';
import { WithoutResults } from "../../UI/withoutResults/withoutResults";

export function ClientList() {
  const { state, filterState, findClient, reload } = useClient();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const filteredClients = state.clientsFilter.filter(
    (client) => !filterState || client.state === filterState
  );

  useEffect(() => {
    findClient().then(() => setLoading(false));
    setCurrentPage(1)
  }, [reload]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClients = filteredClients.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    !loading ? 
    <div className={styles.clientBox}>
      {currentClients.length === 0 ? (
        <WithoutResults message="No se encontraron clientes para mostrar"/>
      ) : (
        
          currentClients.map((client) => (
            <ClientItem key={client._id} client={client} />
          ))
        
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredClients.length}
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

export default ClientList;
