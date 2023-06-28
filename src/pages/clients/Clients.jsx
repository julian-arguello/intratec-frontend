import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useClient } from '../../context/Client.Context';
import ClientList from '../../components/client/ClientList';
import Loading from '../../components/Loading';
import RoleAdmin from '../../components/authRole/RoleAdmin';
import { NewClientButton } from '../../components/buttons/NewClientButton';

function Clients(props) {
  const { state, findClient } = useClient();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    findClient().then(() => setLoading(false));
  }, []);

  return (
     <main>
        <div className="row justify-content-between align-items-center mb-5 mt-3">
           <h2 className="text-center text-lg-start h3 mb-0 order-1 order-lg-0">
              Clientes
           </h2>
        </div>
        <RoleAdmin>
           <NewClientButton />
        </RoleAdmin>
        {loading ? <Loading /> : <ClientList />}
     </main>
  );
}
export default Clients;
