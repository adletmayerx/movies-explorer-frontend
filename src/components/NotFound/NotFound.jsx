import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.not}>
      <h1 className={styles.not__title}>404</h1>
      <p className={styles.not__subtitle}>Страница не найдена</p>
      <Link className={styles.not__link} to="/">
        Назад
      </Link>
    </div>
  );
};

export default NotFound;
