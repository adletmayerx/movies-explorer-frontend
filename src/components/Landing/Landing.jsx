import React from "react";
import styles from "./Landing.module.css";
import { Promo, About, Tech, Student } from "../";
import { Footer } from "../shared";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Promo />
      <About />
      <Tech />
      <Student />
      <Footer />
    </div>
  );
};

export default Landing;
