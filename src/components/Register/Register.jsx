import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.register}>
      <form name="register-form" className={styles.register__form}>
        <label className={styles.register__label}>
          <span className={styles.register__span}>Имя</span>
          <input
            type="text"
            name="register-name"
            className={styles.register__input}
          />
          <span className={styles.register__error}>Имя</span>
        </label>
        <label className={styles.register__label}>
          <span className={styles.register__span}>E-mail</span>
          <input
            type="email"
            name="register-email"
            className={styles.register__input}
          />
          <span className={styles.register__error}>Имя</span>
        </label>
        <label className={styles.register__label}>
          <span className={styles.register__span}>Пароль</span>
          <input
            type="password"
            name="register-password"
            className={styles.register__input}
          />
          <span className={styles.register__error}>Имя</span>
        </label>
        <button type="submit" className={styles.register__submit}>
          Зарегистрироваться
        </button>
        <p className={styles["register__link-container"]}>
          <span className={styles.register__registered}>Уже зарегистрированы?</span>
          <Link className={styles.register__link} to="/profile">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
