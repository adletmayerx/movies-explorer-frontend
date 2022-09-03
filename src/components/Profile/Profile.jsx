import React, { useState, useEffect, useContext } from "react";
import cn from "classnames";
import * as EmailValidator from "email-validator";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { AuthTitle } from "../shared";
import { PopupProfile } from "../";
import currentUserContext from "../../contexts/current-user-context";
import { mainApi } from "../../utils/api";

const Profile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { currentUser } = useContext(currentUserContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !name) {
      return;
    }

    mainApi
      .updateUserInfo(name, email)
      .then(() => {
        setIsPopupOpen(true);
        setPopupMessage("Успешно!");
      })
      .catch((e) => {
        setIsPopupOpen(true);
        setPopupMessage("Произошла ошибка");
        console.error(e);
      });
  };

  const onLogOutButtonClick = () => {
    mainApi
      .logOut()
      .then(() => {
        navigate("/");
        setIsLoggedIn(false);
      })
      .catch((e) => console.error(e));
  };

  const handleCloseButtonClick = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser.email, currentUser.name]);

  useEffect(() => {
    if (
      !nameIsValid ||
      !emailIsValid ||
      (email === currentUser.email && name === currentUser.name)
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [currentUser.email, currentUser.name, email, emailIsValid, name, nameIsValid]);

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

  return (
    <main className={styles.profile}>
      <AuthTitle>Привет, Артур!</AuthTitle>
      <form onSubmit={onSubmit}>
        <div className={styles.profile__info}>
          <div className={styles.profile__row}>
            <span>Имя</span>
            <input value={name} onChange={handleNameChange} className={styles.profile__input} />
          </div>
          <div className={styles.profile__row}>
            <span>E-mail</span>
            <input value={email} onChange={handleEmailChange} className={styles.profile__input} />
          </div>
        </div>
        <div className={styles.profile__controls}>
          <button
            type="submit"
            className={cn(styles.profile__btn, {
              [styles["profile__btn_disabled"]]: !isValid,
            })}
            disabled={!isValid}
          >
            Редактировать
          </button>
          <button type="button" className={styles.profile__btn} onClick={onLogOutButtonClick}>
            Выйти из&nbsp;аккаунта
          </button>
        </div>
      </form>
      {isPopupOpen && (
        <PopupProfile message={popupMessage} onCloseButtonClick={handleCloseButtonClick} />
      )}
    </main>
  );
};

export default Profile;
