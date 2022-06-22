import React from "react";
import styles from "./About.module.css";
import { SectionTitle, BlockTitle } from "../shared";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <SectionTitle className={styles.about__title} text="О&nbsp;проекте" />
        <div className={styles["about__text-container"]}>
          <div className={styles.about__block}>
            <BlockTitle />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
