import React from "react";
import styles from "./SavedMoviesList.module.css";
import { SavedMoviesCard } from "../";

const SavedMoviesList = ({ cards }) => {
  return (
    <div className={styles.cards}>
      <ul className={styles.cards__list}>
        {cards.map(({ image, title, duration, isSaved, id }) => {
          return (
            <li className={styles["cards__list - item"]} key={id}>
              <SavedMoviesCard
                image={image}
                title={title}
                duration={duration}
                isSaved={isSaved}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SavedMoviesList;
