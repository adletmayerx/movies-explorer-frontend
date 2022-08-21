import React from "react";
import styles from "./Switch.module.css";
import cn from "classnames";

const Switch = ({ className }) => {
  return (
    <div className={cn(styles.switch, className)}>
      <input
        className={styles["switch__checkbox"]}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className={styles["switch__label"]} htmlFor={`react-switch-new`}>
        <span className={styles["switch__button"]} />
      </label>
      Короткометражки
    </div>
  );
};

export default Switch;
