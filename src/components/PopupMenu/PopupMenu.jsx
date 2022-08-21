import React from "react";
import styles from "./PopupMenu.module.css";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";
import { MemoBigCrossIcon, MemoAccountIcon } from "../icons";
import { ButtonWithIcon } from "../shared";

const PopupMenu = ({ onCloseButtonClick, popupIsActive }) => {
  return (
    <div className={cn(styles.popup, { [styles.popup_active]: popupIsActive })}>
      <div className={styles.popup__container}>
        <ButtonWithIcon className={styles["popup__close-button"]} onClick={onCloseButtonClick}>
          <MemoBigCrossIcon className={styles["popup__close-icon"]} />
        </ButtonWithIcon>
        <div className={styles.popup__links}>
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? cn(styles.popup__link, styles.popup__link_active) : styles.popup__link
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? cn(styles.popup__link, styles.popup__link_active) : styles.popup__link
            }
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? cn(styles.popup__link, styles.popup__link_active) : styles.popup__link
            }
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link className={styles["popup__account-link"]} to="/profile">
          Аккаунт
          <MemoAccountIcon className={styles["popup__account-icon"]} />
        </Link>
      </div>
    </div>
  );
};

export default PopupMenu;
