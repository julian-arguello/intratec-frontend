import { useEffect, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { BackButton } from "../../../../components/buttons/BackButton";
import { useService } from "../../../../context/Service.Context";
import { Loader } from "../../../../components/UI/Loader/Loader";
import { useParams } from "react-router-dom";
import styles from "./ServiceDetail.module.scss";
import { StateCard } from "../../../../components/service/ServiceDetail/StateCard/StateCard";
import { Navbar } from "../../../../components/Layout/Navbar/Navbar";
import { ServiceEditButton } from "../../../../components/buttons/ServiceEditButton";
import { ServiceDeleteButton } from "../../../../components/buttons/ServiceDeleteButton";
import { TbUserCog } from "react-icons/tb";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { TbUsersGroup } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
import { MdOutlineInventory2 } from "react-icons/md";
import { CiBarcode } from "react-icons/ci";

import Button from "react-bootstrap/Button";

const ServiceDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { state, findServiceId } = useService();

  useEffect(() => {
    state.service = {};
    findServiceId(id).then(() => {
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <section className="d-flex flex-column w-100">
      <Navbar>
        <div className="d-flex flex-wrap gap-2">

        <BackButton to={"/servicios"} />
        <ServiceDeleteButton service={state.service} />
        <ServiceEditButton serviceId={state.service._id} />
        </div>

      </Navbar>
      <main className={styles.main}>
          
          <div className={styles.detailGeneralBox}>
            <h2>Detalle del servicio N° {state.service.service_id}</h2>
            <ul className={styles.detailGeneral}>
              <li>
                <span className="h6 mb-1">Técnico a cargo</span>
                <p>
                  <TbUserCog className={styles.icon} />
                  {state.service.user.name + " " + state.service.user.lastname}
                </p>
              </li>
              <li>
                <span className="h6 mb-1">Fecha de ingreso</span>
                <p>
                  <RxCounterClockwiseClock className={styles.icon} />
                  {format(
                    new Date(state.service.create_at),
                    "dd/MM/yyyy, hh:mm a",
                    { locale: es }
                  )}
                </p>
              </li>
              <li>
                <span className="h6 mb-1">Cliente</span>{" "}
                <p>
                  <TbUsersGroup className={styles.icon} />{" "}
                  {state.service.client.name_busines}
                </p>
              </li>
              <li>
                <span className="h6 mb-1">Marca</span>{" "}
                <p>
                  <CgWorkAlt className={styles.icon} />
                  {state.service.brand}
                </p>
              </li>
              <li>
                <span className="h6 mb-1">Modelo</span>{" "}
                <p>
                  <MdOutlineInventory2 className={styles.icon} />
                  {state.service.model}
                </p>
              </li>
              <li>
                <span className="h6 mb-1">N° de serie</span>{" "}
                <p>
                  <CiBarcode className={styles.icon} />
                  {state.service.serial_number}
                </p>
              </li>

            </ul>
          </div>

          <hr className="hr"/>

          <div className={styles.historyStatusBox}>

            <div className={styles.historyStatusTitleBox}>
            <h3 className="h2">Historial</h3>
            <Button variant="primary">+ Nuevo estado</Button>
            </div>

            {Object.entries(state.service.states).reverse().map(([key, stateInfo]) => {
              const date = new Date(stateInfo.date.$date || stateInfo.date);
              const formattedDate = format(date, "dd/MM/yyyy, hh:mm a", {
                locale: es,
              });

              return (
                <StateCard
                  key={key}
                  state={key}
                  description={stateInfo.description}
                  date={formattedDate}
                  active = {key === state.service.state}
                />
              );
            })}
           </div>



      </main>
    </section>
  );
};
export { ServiceDetail };
