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
      nameRU ?? "none",
      nameEN ?? "none",
      description ?? "none",
      director ?? "none",
      country ?? "none",
      year ?? "none",
      duration,
      image ?? "https://tinyurl.com/2ubthy46",
      trailerLink ?? "https://www.youtube.com/",
      thumbnail ?? "none",
      movieId
    );
  };

  return (
    <div className={styles.card}>
      <a href={trailerLink || "https://www.youtube.com/"} target="_blank" rel="noreferrer">
        <img
          src={`https://api.nomoreparties.co/${image}`}
          alt={`постер фильма ${nameRU}`}
          className={styles.card__image}
        />
      </a>
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
