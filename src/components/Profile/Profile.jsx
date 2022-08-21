import React from "react";
import styles from "./Profile.module.css";
import { AuthTitle } from "../shared";

const Profile = () => {
  return (
    <main className={styles.profile}>
      <AuthTitle>Привет, Артур!</AuthTitle>
      <div className={styles.profile__info}>
        <div className={styles.profile__row}>
          <span>Имя</span>
          <span>Артур</span>
        </div>
        <div className={styles.profile__row}>
          <span>E-mail</span>
          <span>pochta@yandex.ru</span>
        </div>
      </div>
      <div className={styles.profile__controls}>
        <button type="button" className={styles.profile__btn}>
          Редактировать
        </button>
        <button type="button" className={styles.profile__btn}>
          Выйти из&nbsp;аккаунта
        </button>
      </div>
    </main>
  );
};

export default Profile;
