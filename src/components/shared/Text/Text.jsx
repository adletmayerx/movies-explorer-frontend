import React from "react";
import styles from "./Text.module.css";
import cn from "classnames";

const Text = ({ text, className, children }) => {
  return (
    <p className={cn(styles.text, className)}>
      {text}
      {children}
    </p>
  );
};

export default Text;
