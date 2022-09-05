import React from "react";
import styles from "./Nav.module.css";
import cn from "classnames";
import { NavLink, Link } from "react-router-dom";

const Nav = ({ className }) => {
  return (
    <nav className={cn(styles.nav, className)}>
      <ul className={cn(styles.nav__list, styles["nav-list"])}>
        <li className={styles["nav__list-item"]}>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? cn(styles.nav__link, styles.nav__link_active) : styles.nav__link
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li className={styles["nav__list-item"]}>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive ? cn(styles.nav__link, styles.nav__link_active) : styles.nav__link
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
