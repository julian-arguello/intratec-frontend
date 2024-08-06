import { stateClass } from "../../../../utils/service.state";
import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";
import { ServiceDetailsButton } from "../../../Buttons/ServiceDetailsButton";
import styles from "./ServiceItem.module.scss";
import { MdOutlineInventory2 } from "react-icons/md";
import { TbUserCog } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";
import { RxCounterClockwiseClock } from "react-icons/rx";

export function ServiceItem({ service, clientDetail }) {


  return (
    <div
      className={`rounded-2  ${styles.card} ${
        styles[stateClass(service.state)]
      }`}
    >
      <span className={`h6 estado ${styles.state}`}>{service.state}</span>

      <div className={`rounded-2 py-3  ${styles.cardBody}`}>
        <div className=" d-flex justify-content-between mb-3">

          <span className="h5 m-0 d-flex align-items-center">N° {service.service_id}</span>
          
          {!clientDetail && (
            <span className="text-box-card text-end">
              <TbUsersGroup className={`me-2 ${styles.icon}`} />
              {service.client.name_busines}
            </span>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <TbUserCog className={`me-2 ${styles.icon}`} />
            <span className="text-box-card text-truncate">
              {service.user.name + " " + service.user.lastname}
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center mb-4">
          <MdOutlineInventory2 className={`me-2 ${styles.icon}`} />
          <span className="text-box-card text-truncate">
            {service.model + " (" + service.brand + ")"}
          </span>
        </div>
        
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div className="d-flex align-items-center">
            <RxCounterClockwiseClock className={`me-2 ${styles.icon}`} />
            <small>
              {formatDistance(new Date(service.create_at), new Date(), {
                locale: es,
              })}
            </small>
          </div>

          <ServiceDetailsButton id={service._id} />

        </div>
      </div>
    </div>
  );
}
export default ServiceItem;
