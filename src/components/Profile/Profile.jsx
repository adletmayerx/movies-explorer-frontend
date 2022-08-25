import React, { useState, useContext, useEffect,  } from "react";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { AuthTitle } from "../shared";
import currentUserContext from "../../contexts/current-user-context";
import { mainApi } from "../../utils/api";

const Profile = ({ handleUpdateUser }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

    mainApi.updateUserInfo(name, email).catch((e) => console.error(e));
  };

  const onLogOutButtonClick = () => {
    mainApi.logOut().then((res) => {
      navigate("/");
    });
  };

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser.email, currentUser.name]);

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
          <button type="submit" className={styles.profile__btn}>
            Редактировать
          </button>
          <button type="button" className={styles.profile__btn} onClick={onLogOutButtonClick}>
            Выйти из&nbsp;аккаунта
          </button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
