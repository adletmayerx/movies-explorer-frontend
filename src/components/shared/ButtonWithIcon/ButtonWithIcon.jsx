import React from "react";
import styles from "./ButtonWithIcon.module.css";
import cn from "classnames";

const ButtonWithIcon = ({ className, onClick, children }) => {
  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonWithIcon;
