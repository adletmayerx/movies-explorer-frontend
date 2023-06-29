import React, { useState, useContext, useEffect, useCallback } from "react";
import styles from "./Movies.module.css";
import cn from "classnames";
import { SearchForm, Preloader } from "../";
import { Button, MoviesCardList } from "../shared";
import { moviesApi, mainApi } from "../../utils/api";
import currentUserContext from "../../contexts/current-user-context";
import filterResults from "../../utils/filter-results";

const Movies = () => {
  const { currentUser } = useContext(currentUserContext);

  const [allMovies, setAllMovies] = useState([]);
  const [cards, setCards] = useState([]);
  const [cardsForRender, setCardsForRender] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isShortFilms, setIsShortFilms] = useState(false);
  const [isLoadButtonVisible, setIsLoadButtonsVisible] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem(`${currentUser._id}_movies`));
    const savedQuery = JSON.parse(localStorage.getItem(`${currentUser._id}_searchQuery`));
    const savedToggleValue = JSON.parse(localStorage.getItem(`${currentUser._id}_isShortFilms`));

    if (savedMovies) {
      setCardsForRender(setInitialCards(savedMovies));
      setCards(savedMovies);
      setInputValue(savedQuery);
      setIsShortFilms(savedToggleValue);
    }
  }, [currentUser]);

  const handleSearchFormSubmit = () => {
    if (inputValue === "") {
      setMessage("Нужно ввести ключевое слово");
      return;
    }

    setIsLoading(true);

    if (allMovies.length === 0) {
      moviesApi
        .getMovies()
        .then((res) => {
          setAllMovies(res);
          getFilteredMovies(res, isShortFilms);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      getFilteredMovies(allMovies, isShortFilms);
      setIsLoading(false);
    }
  };

  const getFilteredMovies = (_movies, isShortFilms) => {
    const movies = defineLikes(_movies, savedCards);
    const filteredMovies = filterResults(movies, inputValue, isShortFilms);

    if (filteredMovies.length === 0) {
      setMessage("Ничего не найдено");
    } else {
      setMessage("");
    }

    saveQueryAndMovies(filteredMovies);
    setCardsForRender(setInitialCards(filteredMovies));
    setCards(filteredMovies);
  };

  const saveQueryAndMovies = (movies) => {
    localStorage.setItem(`${currentUser._id}_movies`, JSON.stringify(movies));
    localStorage.setItem(`${currentUser._id}_searchQuery`, JSON.stringify(inputValue));
    localStorage.setItem(`${currentUser._id}_isShortFilms`, JSON.stringify(isShortFilms));
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
    const savedCard = savedCards.find((card) => card.movieId === movieId);

    if (savedCard) {
      mainApi
        .deleteMovie(savedCard._id)
        .then(() => {
          setSavedCards((prev) => prev.filter((card) => card._id !== savedCard._id));
          setCardsForRender((prev) =>
            prev.map((card) => (card.id === movieId ? { ...card, isSaved: false } : card))
          );

          let savedMovies = JSON.parse(localStorage.getItem(`${currentUser._id}_movies`));
          savedMovies = savedMovies.map((card) =>
            card.id === movieId ? { ...card, isSaved: false } : card
          );
          localStorage.setItem(`${currentUser._id}_movies`, JSON.stringify(savedMovies));
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
          setSavedCards((prev) => [...prev, res]);

          setCardsForRender((prev) =>
            prev.map((card) => (card.id === movieId ? { ...card, isSaved: true } : card))
          );
          let savedMovies = JSON.parse(localStorage.getItem(`${currentUser._id}_movies`));
          savedMovies = savedMovies.map((card) =>
            card.id === movieId ? { ...card, isSaved: true } : card
          );
          localStorage.setItem(`${currentUser._id}_movies`, JSON.stringify(savedMovies));
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  const handleSwitchClick = () => {
    debugger;
    setIsShortFilms(!isShortFilms);

    if (allMovies.length === 0) {
      return;
    }

    getFilteredMovies(allMovies, !isShortFilms);
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

  useEffect(() => {
    const removeAllMoviesData = () => {
      localStorage.removeItem(`${currentUser._id}_movies`);
      localStorage.removeItem(`${currentUser._id}_searchQuery`);
      localStorage.removeItem(`${currentUser._id}_isShortFilms`);
    };

    window.addEventListener("beforeunload", removeAllMoviesData);
    return () => {
      window.removeEventListener("beforeunload", removeAllMoviesData);
    };
  }, [currentUser._id]);

  return (
    <main className={styles.movies}>
      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        isShortFilms={isShortFilms}
        handleSwitchClick={handleSwitchClick}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {!isLoading && <p className={styles["movies__message"]}>{message}</p>}
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList cards={cardsForRender} handleSaveButtonClick={handleSaveButtonClick} />
      )}
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
