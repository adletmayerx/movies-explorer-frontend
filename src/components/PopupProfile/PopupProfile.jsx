import React from "react";
import styles from "./PopupProfile.module.css";
import { MemoBigCrossIcon } from "../icons";
import { ButtonWithIcon } from "../shared";

const PopupProfile = ({ message, onCloseButtonClick }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__content}>
        <p className={styles.popup__text}>{message}</p>
        <button type="button" className={styles.popup__button} onClick={onCloseButtonClick}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default PopupProfile;
