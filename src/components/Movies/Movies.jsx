import React from "react";
import styles from "./Movies.module.css";
import { SearchForm } from "../";
import { Button, MoviesCards } from "../shared";
import movieImage from "../../images/movies-card-image.png";

const Movies = () => {
  const cards = [
    {
      image: movieImage,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
      id: 1,
    },
    {
      image: movieImage,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
      id: 2,
    },
    {
      image: movieImage,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: false,
      id: 3,
    },
    {
      image: movieImage,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
      id: 4,
    },
  ];

  return (
    <main className={styles.movies}>
      <SearchForm />
      <MoviesCards cards={cards} />
      <Button
        type="button"
        className={styles["movies__more-btn"]}
        text={"Ещё"}
      />
    </main>
  );
};

export default Movies;
