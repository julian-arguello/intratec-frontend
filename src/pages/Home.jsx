import { useEffect, useState } from 'react';
import { useService } from '../context/Service.Context';
import { Link } from 'react-router-dom';
import HomeStatistics from '../components/home/HomeStatistics';
import HomeListServiceRecent from '../components/home/HomeListServiceRecent';
import Loading from '../components/Loading';
import RoleAdmin from '../components/authRole/RoleAdmin';

import { useNotify } from '../context/Notify.Context';
import { NewServiceButton } from '../components/buttons/NewServiceButton';
// import imagenes from '../assets/images';

function Home() {
  const { findServiceRecent, findStatistics } = useService();
  const [loadingStatistics, setloadingStatistics] = useState(true);
  const [loadingServiceRecent, setLoadingServiceRecent] = useState(true);
  const { notify } = useNotify();

  useEffect(() => {
    findServiceRecent().then(() => setLoadingServiceRecent(false));
    findStatistics().then(() => setloadingStatistics(false));
  }, []);

  return (
    <main className="d-flex flex-column mt-3">
      <div className="order-1 order-sm-3 mt-5 mt-sm-0 mb-5 mb-sm-0">
        <h2 className="my-4 text-center text-md-start h4">
          Servicios más recientes
        </h2>
        {loadingServiceRecent ? <Loading /> : <HomeListServiceRecent />}
      </div>

      <hr className="hr order-2 mb-5 mb-sm-0" />

      <div className="order-3 order-sm-1">
        <RoleAdmin>
          <NewServiceButton />
        </RoleAdmin>
        {loadingStatistics ? <Loading /> : <HomeStatistics />}
      </div>
    </main>
  );
}
export default Home;
