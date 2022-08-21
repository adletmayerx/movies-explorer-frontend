import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <h2 className={styles.footer__title}>
          Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
        </h2>
        <div className={styles["footer__body"]}>
          <ul className={styles.links}>
            <li className={styles["links__list-item"]}>
              <a
                href="https://practicum.yandex.ru/profile/web/"
                target="_blank"
                rel="noreferrer"
                className={styles.links__link}
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className={styles["links__list-item"]}>
              <a
                href="https://github.com/asadrtdinov"
                target="_blank"
                rel="noreferrer"
                className={styles.links__link}
              >
                Github
              </a>
            </li>
            <li className={styles["links__list-item"]}>
              <a
                href="https://t.me/sadrtdinov_a"
                target="_blank"
                rel="noreferrer"
                className={styles.links__link}
              >
                Telegram
              </a>
            </li>
          </ul>
          <p className={styles.footer__copy}>&copy;2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
