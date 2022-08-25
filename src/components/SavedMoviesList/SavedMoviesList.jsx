import React from "react";
import styles from "./SavedMoviesList.module.css";
import { SavedMoviesCard } from "../";

const SavedMoviesList = ({ cards, handleDeleteButtonClick }) => {
  return (
    <div className={styles.cards}>
      <ul className={styles.cards__list}>
        {cards.map(({ image, nameRU, duration, movieId, _id }) => {
          return (
            <li className={styles["cards__list - item"]} key={_id}>
              <SavedMoviesCard
                image={image}
                nameRU={nameRU}
                duration={duration}
                movieId={movieId}
                handleDeleteButtonClick={handleDeleteButtonClick}
                id={_id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SavedMoviesList;
