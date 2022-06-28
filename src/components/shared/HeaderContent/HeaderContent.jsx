import React from "react";
import styles from "./HeaderContent.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";
import { MemoMenuIcon, MemoAccountIcon } from "../../icons";
import { Nav } from "../";

const HeaderContent = () => {
  return (
    <div className={styles.content}>
      <MemoMenuIcon className={styles.content__menu} />
      <Nav className={styles.content__nav} />
      <Link className={styles.content__link} to="/profile">
        Аккаунт <MemoAccountIcon className={styles["content__account-icon"]} />
      </Link>
    </div>
  );
};

export default HeaderContent;
