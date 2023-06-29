import React, { useState, useEffect, useContext } from "react";
import styles from "./SavedMovies.module.css";
import { SearchForm, SavedMoviesList } from "../";
import { mainApi } from "../../utils/api";
import currentUserContext from "../../contexts/current-user-context";
import filterResults from "../../utils/filter-results";

const SavedMovies = () => {
  const { currentUser } = useContext(currentUserContext);
  const [cards, setCards] = useState([]);
  const [cardsForRender, setCardsForRender] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isShortFilms, setIsShortFilms] = useState(false);

  const handleDeleteButtonClick = (id) => {
    mainApi
      .deleteMovie(id)
      .then((res) => {
        setCards((prev) => prev.filter((card) => card._id !== id));

        const deletedMovie = cards.find((card) => card._id === id);
        let savedMovies = JSON.parse(localStorage.getItem(`${currentUser._id}_movies`));

        savedMovies = savedMovies.map((card) =>
          card.id === deletedMovie.movieId ? { ...card, isSaved: false } : card
        );
        localStorage.setItem(`${currentUser._id}_movies`, JSON.stringify(savedMovies));
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleSearchFormSubmit = () => {
    const filteredMovies = filterResults(cards, inputValue, isShortFilms);
    setCardsForRender(filteredMovies);
  };

  const handleSwitchClick = () => {
    setIsShortFilms(!isShortFilms);

    const filteredMovies = filterResults(cards, inputValue, !isShortFilms);

    setCardsForRender(filteredMovies);
  };

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        setCards(res);
        setCardsForRender(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <main className={styles.movies}>
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        isShortFilms={isShortFilms}
        handleSwitchClick={handleSwitchClick}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <SavedMoviesList cards={cardsForRender} handleDeleteButtonClick={handleDeleteButtonClick} />
    </main>
  );
};

export default SavedMovies;
