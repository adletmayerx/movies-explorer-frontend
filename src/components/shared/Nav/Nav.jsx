import React from "react";
import styles from "./Nav.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

const Nav = ({ className }) => {
  return (
    <nav className={cn(styles.nav, className)}>
      <ul className={cn(styles.nav__list, styles["nav-list"])}>
        <li className={styles["nav__list-item"]}>
          <Link to="/movies" className={styles.nav__link}>
            Фильмы
          </Link>
        </li>
        <li className={styles["nav__list-item"]}>
          <Link to="/saved" className={styles.nav__link}>
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
