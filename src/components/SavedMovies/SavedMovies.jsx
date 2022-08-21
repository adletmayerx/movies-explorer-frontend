import React from "react";
import styles from "./SavedMovies.module.css";
import { SearchForm, SavedMoviesList } from "../";
import movieImage from "../../images/movies-card-image.png";

const SavedMovies = () => {
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
  ];

  return (
    <main className={styles.movies}>
      <SearchForm />
      <SavedMoviesList cards={cards} />
    </main>
  );
};

export default SavedMovies;
