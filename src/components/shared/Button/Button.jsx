import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

const Button = ({ type, className, text }) => {
  return (
    <button type={type} className={cn(styles.button, className)}>
      {text}
    </button>
  );
};

export default Button;
