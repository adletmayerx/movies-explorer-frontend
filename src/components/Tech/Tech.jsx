import React from "react";
import styles from "./Tech.module.css";
import cn from "classnames";
import { SectionTitle, Text } from "../shared";

const Tech = () => {
  return (
    <section className={styles.tech}>
      <div className={styles.tech__container}>
        <SectionTitle className={styles.tech__title} text="Технологии" />
        <div className={cn(styles["tech__info"], styles.info)}>
          <h3 className={styles.info__title}>7&nbsp;технологий</h3>
          <Text
            className={styles.info__text}
            text="На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте."
          />
          <ul className={cn(styles["info__tech-list"], styles["tech-list"])}>
            <li className={styles["tech-list__list-item"]}>HTML</li>
            <li className={styles["tech-list__list-item"]}>CSS</li>
            <li className={styles["tech-list__list-item"]}>JS</li>
            <li className={styles["tech-list__list-item"]}>React</li>
            <li className={styles["tech-list__list-item"]}>Git</li>
            <li className={styles["tech-list__list-item"]}>Express.js</li>
            <li className={styles["tech-list__list-item"]}>mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tech;
