import React from "react";
import styles from "./Landing.module.css";
import { Promo, About } from "../";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Promo />
      <About />
    </div>
  );
};

export default Landing;
