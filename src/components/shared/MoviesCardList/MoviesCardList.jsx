import React from "react";
import styles from "./MoviesCardList.module.css";
import { MoviesCard } from "..";

const MoviesCardList = ({ cards, handleSaveButtonClick }) => {
  return (
    <div className={styles.cards}>
      <ul className={styles.cards__list}>
        {cards.map(
          ({
            image,
            nameRU,
            duration,
            isSaved,
            movieId,
            id,
            nameEN,
            description,
            director,
            country,
            year,
            trailerLink,
          }) => {
            return (
              <li className={styles["cards__list - item"]} key={id}>
                <MoviesCard
                  image={image.url}
                  nameRU={nameRU}
                  duration={duration}
                  isSaved={isSaved}
                  movieId={id}
                  handleSaveButtonClick={handleSaveButtonClick}
                  nameEN={nameEN}
                  description={description}
                  director={director}
                  country={country}
                  year={year}
                  trailerLink={trailerLink}
                  thumbnail={image.formats.thumbnail.url}
                />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default MoviesCardList;
