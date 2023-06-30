import { useEffect, useState } from 'react';
import { useClient } from '../../context/Client.Context';
import { BackButton } from '../buttons/BackButton';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import ServiceItem from '../service/ServiceItem';

export const ClientServices = () => {
   const { id } = useParams();
   const { state, findClientId } = useClient();
   const [loading, setloading] = useState(true);

   useEffect(() => {
      findClientId(id).then(() => {
         setloading(false);
      });
   }, []);

   if (loading) {
      return <Loading />;
   }

   return (
      <>
         <div className="row align-items-center mb-5 mt-3">
            <h2 className="col-6 col-md-4 text-end text-sm-start h3 order-1 order-md-0 mb-0">
               Servicios de {state.client.name_busines}
            </h2>
            <div
               className={
                  (state.client.services.length <= 2
                     ? 'col-6 col-md-4'
                     : 'col-6 col-md-8') + ' order-0 order-md-1'
               }
            >
               <div className="float-md-end">
                  <BackButton refer={'/clientes'} />
               </div>
            </div>
         </div>
         <ul className="row p-0">
            {state.client.services.map((service) => (
               <li className="col-12 col-md-4 mb-5">
                  <ServiceItem
                     key={service._id}
                     service={service}
                     clientDetail={true}
                  />
               </li>
            ))}
         </ul>
      </>
   );
};
