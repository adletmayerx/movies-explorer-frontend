import React from "react";
import styles from "./Landing.module.css";
import { Promo, About, Tech, Student } from "../";
import { Footer } from "../shared";

const Landing = ({isLoggedIn}) => {
  return (
    <div className={styles.landing}>
      <Promo isLoggedIn={isLoggedIn} />
      <About />
      <Tech />
      <Student />
      <Footer />
    </div>
  );
};

export default Landing;
