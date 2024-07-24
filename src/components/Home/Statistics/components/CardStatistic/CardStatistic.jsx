import styles from "./CardStatistics.module.scss";

import { MdCallReceived } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { MdDownloadDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdInsertEmoticon } from "react-icons/md";

const CardStatistic = ({ type, title, count, className = "" }) => {
  let icon;
  let cardStyles;

  switch (type) {
    case "received":
      icon = <MdCallReceived className="material-icons-outlined me-2" />;
      cardStyles = styles.received;
      break;

    case "reviewed":
      icon = <FaListCheck className="material-icons-outlined me-2" />;
      cardStyles = styles.reviewed;

      break;

    case "repaired":
      icon = <MdDownloadDone className="material-icons-outlined me-2" />;
      cardStyles = styles.repaired;

      break;

    case "withoutRepair":
      icon = <IoMdClose className="material-icons-outlined me-2" />;
      cardStyles = styles.withoutRepair;

      break;

    default:
      icon = <MdInsertEmoticon className="material-icons-outlined me-2" />;
      cardStyles = styles.default;
  }

  return (
    <div className={styles.card}>
      <div className={`p-3 rounded-2 ${cardStyles} ${className}`}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="h3 mb-0">
            <strong>{count}</strong>
          </p>
          {icon}
        </div>
        <p className="mb-0">
          <strong>{title}</strong>
        </p>
      </div>
    </div>
  );
};

export { CardStatistic };
