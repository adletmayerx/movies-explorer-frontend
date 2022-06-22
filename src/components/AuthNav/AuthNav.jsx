import React from "react";
import styles from "./AuthNav.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className={styles["auth-nav"]}>
      <Link
        to="/signup"
        className={cn(styles["auth-nav__btn"], styles["auth-nav__sign-up-btn"])}
      >
        Регистрация
      </Link>

      <Link
        to="/signin"
        className={cn(styles["auth-nav__btn"], styles["auth-nav__sign-in-btn"])}
      >
        Войти
      </Link>
    </div>
  );
};

export default AuthNav;
