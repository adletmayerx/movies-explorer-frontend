import React, { useRef, useEffect } from "react";
import styles from "./Switch.module.css";
import cn from "classnames";

const Switch = ({ className, isShortFilms, handleSwitchClick }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isShortFilms) {
      inputRef.current.checked = isShortFilms;
    } else {
      inputRef.current.removeAttribute("checked");
    }
  }, [isShortFilms]);

  return (
    <div className={cn(styles.switch, className)}>
      <input
        ref={inputRef}
        className={styles["switch__checkbox"]}
        id={`react-switch-new`}
        type="checkbox"
        onClick={handleSwitchClick}
      />
      <label className={styles["switch__label"]} htmlFor={`react-switch-new`}>
        <span className={styles["switch__button"]} />
      </label>
      Короткометражки
    </div>
  );
};

export default Switch;
