import React from "react";
import styles from "./SavedMoviesCard.module.css";
import { MemoCrossIcon } from "../icons";

const SavedMoviesCard = ({ image, title, duration, isSaved }) => {

  return (
    <div className={styles.card}>
      <img src={image} alt="постер фильма" className={styles.card__image} />
      <div className={styles.card__footer}>
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__duration}>{duration}</p>
        </div>
        <MemoCrossIcon
          className={styles.card__icon}
        />
      </div>
    </div>
  );
};

export default SavedMoviesCard;
