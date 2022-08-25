import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = ({ handleRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    handleRegister(name, email, password);
  };

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
            required
          />
          <span className={styles.register__error}>Имя</span>
        </label>
        <label className={styles.register__label}>
          <span className={styles.register__span}>E-mail</span>
          <input
            type="email"
            name="register-email"
            className={styles.register__input}
            value={email}
            onChange={handleEmailChange}
            required
          />
          <span className={styles.register__error}>E-mail</span>
        </label>
        <label className={styles.register__label}>
          <span className={styles.register__span}>Пароль</span>
          <input
            type="password"
            name="register-password"
            className={styles.register__input}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <span className={styles.register__error}>Пароль</span>
        </label>
        <button type="submit" className={styles.register__submit}>
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
