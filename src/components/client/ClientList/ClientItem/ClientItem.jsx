import styles from "./ClientItem.module.scss";
import { MdOutlineInventory2 } from "react-icons/md";
import { TbUserCog } from "react-icons/tb";
import { ClientAssociatedServicesButton } from "../../../buttons/ClientAssociatedServicesButton";
import { ClientEditButton } from "../../../buttons/ClientEditButton";
import { ClientDeleteButton } from "../../../buttons/ClientDeleteButton";
import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneSolid } from "react-icons/lia";
import { formatPhone, formatCuitCuil } from "../../../../utils/formatUtils";


export function ClientItems({ client }) {
  return (
    <div className={`rounded-2  ${styles.card}`}>
      <div className={` ${styles.nameBox}`}>
        <span className={`h6 estado ${styles.name}`}>
          {client.name_busines}
        </span>

        {!Object.keys(client.services).length ? (
          <button className="btn btn-outline-secondary" disabled>
            Sin servicios
          </button>
        ) : (
          <ClientAssociatedServicesButton clientId={client._id} />
        )}
      </div>

      <div className={`rounded-2 py-3 ${styles.cardBody}`}>
        <div className=" d-flex justify-content-between mb-3">
          <span className="h5 m-0 d-flex align-items-center">
          Cuit/Cuil {formatCuitCuil(client.cuit_cuil)}
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <HiOutlineMail className={`me-2 ${styles.icon}`} />
            <span className="text-box-card">{client.email}</span>
            
          </div>
        </div>

        <div className="d-flex align-items-center mb-4">
          <LiaPhoneSolid className={`me-2 ${styles.icon}`} />
          <span className="text-box-card">{formatPhone(client.phone)}</span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <ClientDeleteButton client={client} />

          <ClientEditButton client={client} />
        </div>
      </div>
    </div>
  );
}
export default ClientItems;