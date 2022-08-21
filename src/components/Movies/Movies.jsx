import React, { useState, useContext } from "react";
import styles from "./Movies.module.css";
import { SearchForm } from "../";
import { Button, MoviesCardList } from "../shared";
import { moviesApi } from "../../utils/api";
import currentUserContext from "../../contexts/current-user-context";
import filterResults from "../../utils/filter-results";

const Movies = () => {
  const { currentUser } = useContext(currentUserContext);
  const [cards, setCards] = useState([]);
  const [cardsForRender, setCardsForRender] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isShortFilms, setIsShortFilms] = useState(false);

  const handleSearchFormSubmit = () => {
    moviesApi
      .getMovies()
      .then((res) => {
        // localStorage.setItem(`${currentUser.id} movies`, JSON.stringify(data));
        // localStorage.setItem(`${currentUser.id} searchQuery`, JSON.stringify(inputValue));
        // localStorage.setItem(`${currentUser.id} isShortFilms`, JSON.stringify(isShortFilms));

        const filteredMovies = filterResults(res, inputValue, isShortFilms);
        debugger;
        console.log(filteredMovies);
        setCardsForRender(filteredMovies.splice(0, 3));
        setCards(filteredMovies);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const loadMoreCards = () => {
    debugger;
    const newCardsForRender = cards.filter((card, i) => i < 3);
    setCardsForRender((prev) => prev.concat(newCardsForRender));
    setCards((prev) => prev.filter((card, i) => i > 2));
  };

  return (
    <main className={styles.movies}>
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        setIsShortFilms={setIsShortFilms}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <MoviesCardList cards={cardsForRender} />
      <Button
        type="button"
        className={styles["movies__more-btn"]}
        text={"Ещё"}
        onClick={loadMoreCards}
      />
    </main>
  );
};

export default Movies;
