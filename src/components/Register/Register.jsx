import React, { useState, useEffect } from "react";
import cn from "classnames";
import * as EmailValidator from "email-validator";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = ({ handleRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }

    if (!EmailValidator.validate(email)) {
      return;
    }

    handleRegister(name, email, password);
  };

  useEffect(() => {
    if (!nameIsValid || !emailIsValid || !passwordIsValid) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [emailIsValid, nameIsValid, passwordIsValid]);

  useEffect(() => {
    if (name.length > 30 || name.length < 2) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
  }, [name]);

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
    <div className={styles.register}>
      <form name="register-form" className={styles.register__form} onSubmit={onSubmit}>
        <label className={styles.register__label}>
          <span className={styles.register__span}>Имя</span>
          <input
            type="text"
            name="register-name"
            className={styles.register__input}
            value={name}
            onChange={handleNameChange}
            min="2"
            max="30"
            required
          />
          {!nameIsValid && (
            <span className={styles.register__error}>
              Минимальное число символов - 2. Максимальное - 30
            </span>
          )}
        </label>
        <label className={styles.register__label}>
          <span className={styles.register__span}>E-mail</span>
          <input
            type="email"
            name="register-email"
            className={styles.register__input}
            value={email}
            onChange={handleEmailChange}
            autoComplete="off"
            required
          />
          {!emailIsValid && (
            <span className={styles.register__error}>
              Пожалуйста, введите корректный email-адрес
            </span>
          )}
        </label>
        <label className={styles.register__label}>
          <span className={styles.register__span}>Пароль</span>
          <input
            type="password"
            name="register-password"
            className={styles.register__input}
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
            required
          />
          {!passwordIsValid && (
            <span className={styles.register__error}>
              Минимальное число символов - 2. Максимальное - 30
            </span>
          )}
        </label>
        <button
          type="submit"
          disabled={!isValid}
          className={cn(styles.register__submit, {
            [styles["register__submit_disabled"]]: !isValid,
          })}
        >
          Зарегистрироваться
        </button>
        <p className={styles["register__link-container"]}>
          <span className={styles.register__registered}>Уже зарегистрированы?</span>
          <Link className={styles.register__link} to="/signin">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
