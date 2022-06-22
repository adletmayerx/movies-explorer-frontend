import React from "react";
import styles from "./Landing.module.css";
import { Promo } from "../";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Promo />
    </div>
  );
};

export default Landing;
