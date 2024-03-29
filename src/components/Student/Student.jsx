import React from "react";
import styles from "./Student.module.css";
import cn from "classnames";
import { SectionTitle, Text } from "../shared";
import photo from "../../images/student-photo.jpg";

const Student = () => {
  return (
    <section className={styles.student}>
      <div className={styles.student__container}>
        <SectionTitle className={styles.student__title} text="Студент" />
        <div className={cn(styles.student__info, styles.info)}>
          <img
            src={photo}
            alt="это фото меня в анфас"
            className={styles.info__image}
          />
          <div className={styles["info__text-container"]}>
            <h3 className={styles.info__title}>Артур</h3>
            <p className={styles["info__sub-title"]}>
              Фронтенд-разработчик, 27&nbsp;лет
            </p>
            <Text
              className={styles.info__text}
              text="Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы."
            />
            <ul className={cn(styles.info__socials, styles.socials)}>
              <li className={styles["socials__list-item"]}>
                <a
                  target="_blank"
                  href="https://t.me/sadrtdinov_a"
                  className={styles.socials__link} rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li className={styles["socials__list-item"]}>
                <a
                  target="_blank"
                  href="https://github.com/asadrtdinov"
                  className={styles.socials__link} rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cn(styles.student__portfolio, styles.portfolio)}>
          <h3 className={styles.portfolio__title}>Портфолио</h3>
          <ul className={cn(styles.portfolio__cases, styles.cases)}>
            <li className={styles["cases__list-item"]}>
              <a
                target="_blank"
                href="https://asadrtdinov.github.io/how-to-learn/"
                className={styles.cases__link} rel="noreferrer"
              >
                <span className={styles["cases__link-text"]}>
                  Статичный сайт
                </span>
                <span className={styles["cases__link-icon"]}>↗</span>
              </a>
            </li>
            <li className={styles["cases__list-item"]}>
              <a
                target="_blank"
                href="https://asadrtdinov.github.io/russian-travel/index.html"
                className={styles.cases__link} rel="noreferrer"
              >
                <span className={styles["cases__link-text"]}>
                  Адаптивный сайт
                </span>
                <span className={styles["cases__link-icon"]}>↗</span>
              </a>
            </li>
            <li className={styles["cases__list-item"]}>
              <a
                target="_blank"
                href="https://asadrtdinov.github.io/react-mesto-auth"
                className={styles.cases__link} rel="noreferrer"
              >
                <span className={styles["cases__link-text"]}>
                  Одностраничное приложение
                </span>
                <span className={styles["cases__link-icon"]}>↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Student;
