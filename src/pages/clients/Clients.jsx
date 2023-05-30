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
      <div className="d-flex justify-content-between align-items-center mt-5 mt-sm-0">
        <div className="col-12 col-sm-auto my-5">
          <h2 className="mt-5 mt-sm-0 text-center text-sm-start">Clientes</h2>
        </div>
        <div className="col-12 col-sm-auto mb-5">
          <RoleAdmin>
            <NewClientButton />
          </RoleAdmin>
        </div>
      </div>
      {loading ? <Loading /> : <ClientList />}
    </main>
  );
}
export default Clients;
