import { TbLoader2 } from "react-icons/tb";
import styles from "./Loader.module.scss";
const Loader = (className = "") => {
  return <TbLoader2 className={`${styles.loader} ${className}`} />;
};
export { Loader };
