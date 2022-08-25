import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

const Button = ({ type, className, text, onClick, icon: Icon }) => {
  return (
    <button type={type} className={cn(styles.button, className)} onClick={onClick}>
      {Icon}
      {text}
    </button>
  );
};

export default Button;
