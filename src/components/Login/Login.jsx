import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.login}>
      <form name="login-form" className={styles.login__form}>
        <label className={styles.login__label}>
          <span className={styles.login__span}>E-mail</span>
          <input type="email" name="login-email" className={styles.login__input} />
          <span className={styles.login__error}>Имя</span>
        </label>
        <label className={styles.login__label}>
          <span className={styles.login__span}>Пароль</span>
          <input type="password" name="login-password" className={styles.login__input} />
          <span className={styles.login__error}>Имя</span>
        </label>
        <button type="submit" className={styles.login__submit}>
          Войти
        </button>
        <p className={styles["login__link-container"]}>
          <span className={styles['login__logged-in']}>Ещё не зарегистрированы?</span>
          <Link className={styles.login__link} to="/signup">
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
