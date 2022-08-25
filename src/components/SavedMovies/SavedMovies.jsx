import React, { useState, useEffect } from "react";
import styles from "./SavedMovies.module.css";
import { SearchForm, SavedMoviesList } from "../";
import { moviesApi, mainApi } from "../../utils/api";

const SavedMovies = () => {
  const [cards, setCards] = useState([]);

  const handleDeleteButtonClick = (id) => {
    mainApi
      .deleteMovie(id)
      .then((res) => {
        setCards((prev) => prev.filter((card) => card !== res));
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        setCards(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <main className={styles.movies}>
      <SearchForm />
      <SavedMoviesList cards={cards} handleDeleteButtonClick={handleDeleteButtonClick} />
    </main>
  );
};

export default SavedMovies;
