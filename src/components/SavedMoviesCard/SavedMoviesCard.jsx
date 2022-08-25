import React from "react";
import styles from "./SavedMoviesCard.module.css";
import { MemoCrossIcon } from "../icons";
import { Button } from "../shared";

const SavedMoviesCard = ({ image, nameRU, duration, id, handleDeleteButtonClick }) => {
  const formatDuration = () => {
    let mins = duration;
    let hours = 0;
    while (mins >= 60) {
      mins -= 60;
      hours++;
    }

    return `${hours}ч ${mins}м`;
  };
  const onDeleteButtonClick = () => {
    handleDeleteButtonClick(id);
  };

  const formattedDuration = formatDuration();
  return (
    <div className={styles.card}>
      <img src={image} alt={`постер фильма ${nameRU}`} className={styles.card__image} />
      <div className={styles.card__footer}>
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{nameRU}</h3>
          <p className={styles.card__duration}>{formattedDuration}</p>
        </div>
        <Button
          className={styles.card__button}
          icon={<MemoCrossIcon />}
          onClick={onDeleteButtonClick}
        />
      </div>
    </div>
  );
};

export default SavedMoviesCard;
