import React from "react";
import styles from "./Header.module.css";
import { MemoLogoComponent } from "../../icons";

const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      <MemoLogoComponent />
      {children}
    </div>
  );
};

export default Header;
