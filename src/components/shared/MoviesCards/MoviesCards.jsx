import React from "react";
import styles from "./MoviesCards.module.css";
import { MoviesCard } from "../";

const MoviesCards = ({ cards }) => {
  return (
    <div className={styles.cards}>
      <ul className={styles.cards__list}>
        {cards.map(({ image, title, duration, isSaved, id }) => {
          return (
            <li className={styles["cards__list - item"]} key={id}>
              <MoviesCard
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

export default MoviesCards;
