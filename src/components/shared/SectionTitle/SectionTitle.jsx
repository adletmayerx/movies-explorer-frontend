import React from "react";
import styles from "./SectionTitle.module.css";
import cn from "classnames";

const SectionTitle = ({ text, className }) => {
  return <h2 className={cn(styles["section-title"], className)}>{text}</h2>;
};

export default SectionTitle;
