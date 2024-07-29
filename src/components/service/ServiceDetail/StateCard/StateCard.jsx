import Button from "react-bootstrap/Button";
import styles from "./StateCard.module.scss";
import { stateClass } from "../../../../utils/service.state";
import { RxCounterClockwiseClock } from "react-icons/rx";

import { StateDeleteButton } from "../../../Buttons/StateDeleteButton";
import { StateEditButton } from "../../../Buttons/StateEditButton"

const StateCard = ({ state, description, date, active, service, stateInfo }) => {

  return (
    <div className={`rounded-2  ${styles.card} ${styles[stateClass(state)]}`}>
      <span className={`h6 estado ${styles.state}`}>{state} {active && " - estado actual"}</span>

      <div className={`rounded-2 py-3 ${styles.cardBody}`}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className={styles.descriptionBox}>
            <p className="h6">Descripción</p>
            <span className="text-box-card">{description}</span>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <RxCounterClockwiseClock className={styles.icon} />
            <small>{date}</small>
          </div>

          <div className={styles.buttonBox}>
            
            {state != "Recepcionado" && <StateDeleteButton serviceId={service._id} stateDelete={state} active={!active}/>}
            <StateEditButton service={service} stateInfo={stateInfo} state={state}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export { StateCard };
