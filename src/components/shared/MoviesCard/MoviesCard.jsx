import React from "react";
import styles from "./MoviesCard.module.css";
import { Button } from "../";
import { MemoNotSavedIcon, MemoSavedIcon } from "../../icons";

const MoviesCard = ({
  nameRU,
  nameEN,
  description,
  director,
  country,
  year,
  duration,
  image,
  movieId,
  trailerLink,
  thumbnail,
  isSaved,
  handleSaveButtonClick,
}) => {
  const formatDuration = () => {
    let mins = duration;
    let hours = 0;
    while (mins >= 60) {
      mins -= 60;
      hours++;
    }

    return `${hours}ч ${mins}м`;
  };

  const formattedDuration = formatDuration();

  const onSaveButtonClick = () => {
    handleSaveButtonClick(
      nameRU,
      nameEN,
      description,
      director,
      country,
      year,
      duration,
      image,
      trailerLink,
      thumbnail,
      movieId,
    );
  };

  return (
    <div className={styles.card}>
      <img
        src={`https://api.nomoreparties.co/${image}`}
        alt="постер фильма"
        className={styles.card__image}
      />
      <div className={styles.card__footer}>
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{nameRU}</h3>
          <p className={styles.card__duration}>{formattedDuration}</p>
        </div>
        {isSaved ? (
          <Button
            className={styles.card__button}
            icon={<MemoSavedIcon />}
            onClick={onSaveButtonClick}
          />
        ) : (
          <Button
            className={styles.card__button}
            icon={<MemoNotSavedIcon />}
            onClick={onSaveButtonClick}
          />
        )}
      </div>
    </div>
  );
};

export default MoviesCard;
