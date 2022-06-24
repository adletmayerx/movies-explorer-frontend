import React from "react";
import styles from "./About.module.css";
import cn from "classnames";
import { SectionTitle, BlockTitle, Text } from "../shared";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <SectionTitle className={styles.about__title} text="О&nbsp;проекте" />
        <div className={styles["about__text-container"]}>
          <div className={styles.about__block}>
            <BlockTitle
              text="Дипломный проект включал 5&nbsp;этапов"
              className={styles["about__block-title"]}
            />
            <Text
              text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки."
              className={styles["about__block-text"]}
            />
          </div>
          <div className={styles.about__block}>
            <BlockTitle
              text="На&nbsp;выполнение диплома ушло 5&nbsp;недель"
              className={styles["about__block-title"]}
            />
            <Text
              text="У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
              className={styles["about__block-text"]}
            />
          </div>
        </div>
        <div className={cn(styles["about__time-frame"], styles["time-frame"])}>
          <div
            className={cn(
              styles["time-frame__column"],
              styles["time-frame__column_backend"]
            )}
          >
            <p
              className={cn(
                styles["time-frame__cell_backend-time"],
                styles["time-frame__cell"]
              )}
            >
              1&nbsp;неделя
            </p>
            <p
              className={cn(
                styles["time-frame__cell_backend-title"],
                styles["time-frame__cell"]
              )}
            >
              Back-end
            </p>
          </div>
          <div
            className={cn(
              styles["time-frame__column"],
              styles["time-frame__column_frontend"]
            )}
          >
            <p
              className={cn(
                styles["time-frame__cell_frontend-time"],
                styles["time-frame__cell"]
              )}
            >
              4&nbsp;недели
            </p>
            <p
              className={cn(
                styles["time-frame__cell_frontend-title"],
                styles["time-frame__cell"]
              )}
            >
              Front-end
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
