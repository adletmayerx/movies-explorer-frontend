import React from "react";
import styles from "./Promo.module.css";
import { Header, Button, HeaderContent } from "../shared";
import { AuthNav } from "../";
import promoLogo from "../../images/promo-logo.png";
import { useNavigate } from "react-router-dom";

const Promo = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <section className={styles.promo}>
      <Header>{isLoggedIn ? <HeaderContent /> : <AuthNav />}</Header>
      <div className={styles.promo__container}>
        <img
          src={promoLogo}
          alt="лого лэндинга"
          className={styles.promo__logo}
          onClick={() => navigate("/")}
        />
        <div className={styles["promo__text-container"]}>
          <h1 className={styles.promo__title}>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className={styles["promo__sub-title"]}>
            Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.
          </p>
          <Button className={styles.promo__btn} text="Узнать больше" type="button" />
        </div>
      </div>
    </section>
  );
};

export default Promo;
