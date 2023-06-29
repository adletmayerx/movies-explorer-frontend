import React from "react";
import styles from "./Header.module.css";
import { MemoLogoComponent } from "../../icons";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

const Header = ({ children, className }) => {
  const navigate = useNavigate();

  return (
    <div className={cn(styles.header, className)}>
      <MemoLogoComponent onClick={() => navigate("/")} className={styles.header__logo} />
      {children}
    </div>
  );
};

export default Header;
