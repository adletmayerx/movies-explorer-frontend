import React, { useState, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import * as EmailValidator from "email-validator";
import styles from "./Login.module.css";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    handleLogin(email, password);
  };

  useEffect(() => {
    if (!emailIsValid || !passwordIsValid) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [emailIsValid, passwordIsValid]);

  useEffect(() => {
    if (!EmailValidator.validate(email)) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 30 || password.length < 2) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  }, [password.length]);

  return (
    <div className={styles.login}>
      <form name="login-form" className={styles.login__form} onSubmit={onSubmit}>
        <label className={styles.login__label}>
          <span className={styles.login__span}>E-mail</span>
          <input
            type="email"
            name="login-email"
            className={styles.login__input}
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!emailIsValid && (
            <span className={styles.login__error}>Пожалуйста, введите корректный email-адрес</span>
          )}
        </label>
        <label className={styles.login__label}>
          <span className={styles.login__span}>Пароль</span>
          <input
            type="password"
            name="login-password"
            className={styles.login__input}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {!passwordIsValid && (
            <span className={styles.login__error}>
              Минимальное число символов - 2. Максимальное - 30
            </span>
          )}
        </label>
        <button
          type="submit"
          disabled={!isValid}
          className={cn(styles.login__submit, {
            [styles["login__submit_disabled"]]: !isValid,
          })}
        >
          Войти
        </button>
        <p className={styles["login__link-container"]}>
          <span className={styles["login__logged-in"]}>Ещё не зарегистрированы?</span>
          <Link className={styles.login__link} to="/signup">
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
