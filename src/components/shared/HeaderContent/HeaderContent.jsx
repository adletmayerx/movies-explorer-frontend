import React, { useState } from "react";
import styles from "./HeaderContent.module.css";
import { Link } from "react-router-dom";
import { MemoMenuIcon, MemoAccountIcon } from "../../icons";
import { Nav, ButtonWithIcon } from "../";
import { PopupMenu } from "../../";

const HeaderContent = () => {
  const [popupIsActive, setPopupIsActive] = useState(false);

  const handleMenuButtonClick = () => {
    setPopupIsActive(true);
  };

  const handleCloseButtonClick = () => {
    setPopupIsActive(false);
  };

  return (
    <div className={styles.content}>
      <PopupMenu popupIsActive={popupIsActive} onCloseButtonClick={handleCloseButtonClick} />
      <ButtonWithIcon className={styles.content__button} onClick={handleMenuButtonClick}>
        <MemoMenuIcon className={styles.content__menu} />
      </ButtonWithIcon>
      <Nav className={styles.content__nav} />
      <Link className={styles.content__link} to="/profile">
        Аккаунт
        <MemoAccountIcon className={styles["content__account-icon"]} />
      </Link>
    </div>
  );
};

export default HeaderContent;
