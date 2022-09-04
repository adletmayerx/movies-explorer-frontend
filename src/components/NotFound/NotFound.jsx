import React from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.not}>
      <h1 className={styles.not__title}>404</h1>
      <p className={styles.not__subtitle}>Страница не найдена</p>
      <button className={styles.not__link} onClick={onBackButtonClick}>
        Назад
      </button>
    </div>
  );
};

export default NotFound;
