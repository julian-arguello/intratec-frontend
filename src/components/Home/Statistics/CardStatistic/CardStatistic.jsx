import styles from "./CardStatistics.module.scss";

import { Link } from "react-router-dom";

import { MdCallReceived } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { MdDownloadDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdInsertEmoticon } from "react-icons/md";

const CardStatistic = ({ type, title, count, className = "" }) => {
  let icon;
  let cardStyles;
  let state;

  switch (type) {
    case "received":
      icon = <MdCallReceived className="material-icons-outlined me-2" />;
      cardStyles = styles.received;
      state = "recepcionado";
      break;

    case "reviewed":
      icon = <FaListCheck className="material-icons-outlined me-2" />;
      cardStyles = styles.reviewed;
      state = "revisado";
      break;

    case "repaired":
      icon = <MdDownloadDone className="material-icons-outlined me-2" />;
      cardStyles = styles.repaired;
      state = "reparado";
      break;

    case "withoutRepair":
      icon = <IoMdClose className="material-icons-outlined me-2" />;
      cardStyles = styles.withoutRepair;
      state = "sin-reparacion";
      break;

    default:
      icon = <MdInsertEmoticon className="material-icons-outlined me-2" />;
      cardStyles = styles.default;
      state = "";
  }

  return (
    <Link className={styles.card} to={`/servicios/${state}`}>
      <div className={`p-3 rounded-2 ${cardStyles} ${className}`}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="h3 mb-0">
            <strong>{count}</strong>
          </p>
          {icon}
        </div>
        <p className="mb-0">
          <strong className={styles.title}>{title}</strong>
        </p>
      </div>
    </Link>
  );
};

export { CardStatistic };
