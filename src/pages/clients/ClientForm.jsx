import ClientFormAdd from "../../components/client/ClientFormAdd";
import ClientFormEdit from "../../components/client/ClientFormEdit";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ServiceAdd(props) {
   const location = useLocation();
   const [clientName, setclientName] = useState();

   useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      setclientName(searchParams.get('clientName'));
   }, [location.search]);

   return (
      <main>
         {!props.edit ? (
            <h2 className="my-5 pt-5 pt-sm-0 text-center text-sm-start">
               Agregar Cliente
            </h2>
         ) : (
            <h2 className="my-5 pt-5 pt-sm-0 text-center text-sm-start">
               Editar datos de {clientName}
            </h2>
         )}
         {!props.edit ? <ClientFormAdd /> : <ClientFormEdit />}
      </main>
   );
}
export default ServiceAdd