import React from "react";
import styles from "./Landing.module.css";
import { Promo, About, Tech, Student } from "../";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Promo />
      <About />
      <Tech />
      <Student />
    </div>
  );
};

export default Landing;
