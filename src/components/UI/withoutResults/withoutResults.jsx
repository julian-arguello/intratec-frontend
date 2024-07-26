import React from "react";
import styles from "./withoutResults.module.scss";

const WithoutResults = ({ message }) => {
  return <div className={styles.withoutResults}>{message}</div>;
};

export { WithoutResults };
