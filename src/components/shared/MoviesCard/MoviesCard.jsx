import React from "react";
import styles from "./MoviesCard.module.css";
import { MemoNotSavedIcon, MemoSavedIcon } from "../../icons";

const MoviesCard = ({ image, nameRU, duration, isSaved }) => {
  const formatDuration = () => {
    let mins = duration;
    let hours = 0;
    while (mins >= 60) {
      mins -= 60;
      hours++;
    }

    return `${hours}ч ${mins}м`;
  };

  const formatedDuration = formatDuration();
  return (
    <div className={styles.card}>
      <img
        src={`https://api.nomoreparties.co/${image.url}`}
        alt="постер фильма"
        className={styles.card__image}
      />
      <div className={styles.card__footer}>
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{nameRU}</h3>
          <p className={styles.card__duration}>{formatedDuration}</p>
        </div>
        {isSaved ? (
          <MemoSavedIcon className={styles.card__icon} />
        ) : (
          <MemoNotSavedIcon className={styles.card__icon} />
        )}
      </div>
    </div>
  );
};

export default MoviesCard;
