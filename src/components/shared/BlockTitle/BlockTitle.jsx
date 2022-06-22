import React from "react";
import styles from "./BlockTitle.module.css";
import cn from "classnames";

const BlockTitle = ({ text, className }) => {
  return <h2 className={cn(styles["block-title"], className)}>{text}</h2>;
};

export default BlockTitle;
