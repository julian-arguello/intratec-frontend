import ClientFormAdd from "../../components/client/ClientFormAdd";
import ClientFormEdit from "../../components/client/ClientFormEdit";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BackButton } from '../../components/Buttons/BackButton';

export function ServiceAdd(props) {
   const location = useLocation();
   const [clientName, setclientName] = useState();

   useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      setclientName(searchParams.get('clientName'));
   }, [location.search]);

   return (
      <div>
         {!props.edit ? (
            <div className="row align-items-center mb-5 mt-3">
               <h2 className="col-6 col-md-4 text-end text-sm-start h3 order-1 order-md-0 mb-0">
                  Agregar Cliente
               </h2>
               <div className="col-6 col-md-4 order-0 order-md-1">
                  <div className="float-md-end">
                     <BackButton />
                  </div>
               </div>
            </div>
         ) : (
            <div className="row align-items-center mb-5 mt-3">
               <h2 className="col-6 col-md-4 text-end text-sm-start h3 order-1 order-md-0 mb-0">
                  Editar datos de {clientName}
               </h2>
               <div className="col-6 col-md-4 order-0 order-md-1">
                  <div className="float-md-end">
                     <BackButton />
                  </div>
               </div>
            </div>
         )}
         {!props.edit ? <ClientFormAdd /> : <ClientFormEdit />}
      </div>
   );
}
export default ServiceAdd