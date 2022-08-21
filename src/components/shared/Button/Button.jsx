import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

const Button = ({ type, className, text, onClick }) => {
  return (
    <button type={type} className={cn(styles.button, className)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
