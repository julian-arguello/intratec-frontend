import { useEffect, useState } from "react";
import { useService } from "../../../context/Service.Context";
import ServiceItem from "../../service/ServiceList/ServiceItem/ServiceItem";
import { Loader } from "../../UI/Loader/Loader";
import styles from "./LatestServices.module.scss";

const LatestServices = () => {
  const { state, findServiceRecent } = useService();
  const [loadingServiceRecent, setLoadingServiceRecent] = useState(true);

  useEffect(() => {
    findServiceRecent().then(() => setLoadingServiceRecent(false));
  }, []);

  return !loadingServiceRecent ? (
    <div className={` ${styles.latestServicesBox}`}>
      <div className={styles.titleBox}>
        <h2 className="h4">Servicios recientes</h2>
      </div>

      {state.serviceRecent.map((service) => (
        <ServiceItem key={service._id} service={service} />
      ))}
    </div>
  ) : (
    <div className={`loaderBox ${styles.loaderBox}`}>
      <Loader />
    </div>
  );
};
export { LatestServices };
