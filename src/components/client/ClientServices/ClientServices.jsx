import { useEffect, useState } from "react";
import { useClient } from "../../../context/Client.Context";
import { useParams } from "react-router-dom";
import ServiceItem from "../../service/ServiceList/ServiceItem/ServiceItem";
import { Navbar } from "../../Layout/Navbar/Navbar";
import { ServiceNewButton } from "../../Buttons/ServiceNewButton";
import styles from "./ClientServices.module.scss";
import { Loader } from "../../UI/Loader/Loader";

export const ClientServices = () => {
  const { id } = useParams();
  const { state, findClientId } = useClient();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    findClientId(id).then(() => {
      setloading(false);
    });
  }, []);


  return (
   <section className="d-flex flex-column w-100">
     <Navbar>
       <ServiceNewButton />
     </Navbar>
     <main className={styles.main}>
       {!loading ? (
         <div className={styles.serviceBox}>
           {state.client.services.reverse().map((service) => (
             <ServiceItem
               key={service._id}
               service={service}
               clientDetail={true}
             />
           ))}
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
