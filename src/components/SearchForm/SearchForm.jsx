import React from "react";
import styles from "./SearchForm.module.css";
import { Switch } from "../";

const SearchForm = ({ handleSearchFormSubmit, inputValue, setInputValue, setIsShortFilms, isShortFilms}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearchFormSubmit();
  };
  return (
    <div className={styles.search}>
      <div className={styles.search__container}>
        <div className={styles["search__div-for-border"]}>
          <form name="search-form" className={styles["search-form"]} onSubmit={onSubmit}>
            <input
              type="text"
              className={styles.search__input}
              placeholder="Фильм"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className={styles.search__submit}>
              Найти
            </button>
          </form>
          <Switch className={styles.styles__switch} isShortFilms={isShortFilms} setIsShortFilms={setIsShortFilms} />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
