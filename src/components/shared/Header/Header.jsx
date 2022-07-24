import React from "react";
import styles from "./Header.module.css";
import { MemoLogoComponent } from "../../icons";
import cn from "classnames";

const Header = ({ children, className }) => {
  return (
    <div className={cn(styles.header, className)}>
      <MemoLogoComponent />
      {children}
    </div>
  );
};

export default Header;
