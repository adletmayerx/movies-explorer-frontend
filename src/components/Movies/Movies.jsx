import React, { useState, useContext, useEffect, useCallback } from "react";
import styles from "./Movies.module.css";
import cn from "classnames";
import { SearchForm } from "../";
import { Button, MoviesCardList } from "../shared";
import { moviesApi, mainApi } from "../../utils/api";
import currentUserContext from "../../contexts/current-user-context";
import filterResults from "../../utils/filter-results";

const Movies = () => {
  const { currentUser } = useContext(currentUserContext);
  const [cards, setCards] = useState([]);
  const [cardsForRender, setCardsForRender] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isShortFilms, setIsShortFilms] = useState(false);
  const [isLoadButtonVisible, setIsLoadButtonsVisible] = useState(false);
  const [savedCards, setSavedCards] = useState([]);

  const handleSearchFormSubmit = () => {
    moviesApi
      .getMovies()
      .then((res) => {
        const movies = defineLikes(res, savedCards);

        localStorage.setItem(`${currentUser._id}_movies`, JSON.stringify(movies));
        localStorage.setItem(`${currentUser._id}_searchQuery`, JSON.stringify(inputValue));
        localStorage.setItem(`${currentUser._id}_isShortFilms`, JSON.stringify(isShortFilms));
        const filteredMovies = filterResults(movies, inputValue, isShortFilms);
        setCardsForRender(setInitialCards(filteredMovies));

        setCards(filteredMovies);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const setInitialCards = (cards) => {
    if (window.innerWidth >= 1280) {
      return cards.splice(0, 12);
    } else if (window.innerWidth >= 768) {
      return cards.splice(0, 8);
    } else {
      return cards.splice(0, 5);
    }
  };

  const defineLikes = (cards, savedCards) => {
    return cards.map((card) => {
      const isSaved = savedCards.find((savedCard) => savedCard.movieId === card.id);
      if (isSaved) {
        debugger;
        return { ...card, isSaved };
      } else {
        return card;
      }
    });
  };

  const handleLoadButtonClick = () => {
    if (cards.length === 0) {
      return;
    }

    if (window.innerWidth >= 1280) {
      loadMoreCards(3);
    } else if (window.innerWidth >= 768) {
      loadMoreCards(2);
    } else {
      loadMoreCards(1);
    }
  };

  const loadMoreCards = useCallback(
    (numberOfCards) => {
      const newCardsForRender = cards.filter((card, i) => i < numberOfCards);
      setCardsForRender((prev) => prev.concat(newCardsForRender));
      setCards((prev) => prev.filter((card, i) => i >= numberOfCards));
    },
    [cards]
  );

  const handleSaveButtonClick = (
    nameRU,
    nameEN,
    description,
    director,
    country,
    year,
    duration,
    image,
    trailerLink,
    thumbnail,
    movieId
  ) => {
    if (savedCards.find((card) => card.id === movieId)) {
      mainApi
        .deleteMovie(movieId)
        .then((res) => {
          setSavedCards((prev) => prev.filter((card) => card !== res));
          setCardsForRender((prev) =>
            prev.map((card) => (card.id === movieId ? { ...card, isSaved: false } : card))
          );
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      mainApi
        .saveMovie(
          nameRU,
          nameEN,
          description,
          director,
          country,
          year,
          duration,
          image,
          trailerLink,
          thumbnail,
          movieId
        )
        .then((res) => {
          setSavedCards((prev) => prev.push(res));
          setCardsForRender((prev) =>
            prev.map((card) => (card.id === movieId ? { ...card, isSaved: true } : card))
          );
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        setSavedCards(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    let resizeTimeout;

    const handleWindowResize = () => {
      if (cards.length === 0) {
        return;
      }

      clearTimeout(resizeTimeout);

      if (window.innerWidth >= 1280) {
        if (cardsForRender.length >= 12 || cards.length === 0) {
          return;
        }

        const numberOfCards = 12 - cardsForRender.length;

        resizeTimeout = setTimeout(() => loadMoreCards(numberOfCards), 400);
      } else if (window.innerWidth >= 768) {
        if (cardsForRender.length >= 8 || cards.length === 0) {
          return;
        }
        const numberOfCards = 8 - cardsForRender.length;

        resizeTimeout = setTimeout(() => loadMoreCards(numberOfCards), 400);
      } else {
        if (cardsForRender.length >= 5 || cards.length === 0) {
          return;
        }
        const numberOfCards = 5 - cardsForRender.length;

        resizeTimeout = setTimeout(() => loadMoreCards(numberOfCards), 400);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [cards?.length, cardsForRender?.length, loadMoreCards]);

  useEffect(() => {
    if (cards.length === 0) {
      setIsLoadButtonsVisible(false);
    } else {
      setIsLoadButtonsVisible(true);
    }
  }, [cards]);

  return (
    <main className={styles.movies}>
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        setIsShortFilms={setIsShortFilms}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <MoviesCardList cards={cardsForRender} handleSaveButtonClick={handleSaveButtonClick} />
      <Button
        type="button"
        className={cn(styles["movies__more-btn"], {
          [styles["movies__more-btn_hidden"]]: !isLoadButtonVisible,
        })}
        text={"Ещё"}
        onClick={handleLoadButtonClick}
      />
    </main>
  );
};

export default Movies;
