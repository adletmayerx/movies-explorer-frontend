import React from "react";
import styles from "./AuthTitle.module.css";

const AuthTitle = ({title}) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default AuthTitle;
