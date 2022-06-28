import React from "react";
import styles from "./SearchForm.module.css";
import { Switch } from "../";

const SearchForm = () => {
  return (
    <div className={styles.search}>
      <div className={styles.search__container}>
        <div className={styles["search__div-for-border"]}>
          <form name="search-form" className={styles["search-form"]}>
            <input
              type="text"
              className={styles.search__input}
              placeholder="Фильм"
            />
            <button type="submit" className={styles.search__submit}>
              Найти
            </button>
          </form>
          <Switch className={styles.styles__switch} />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
