import React from "react";
import styles from "./AuthHeader.module.css";
import { Header, AuthTitle } from "../shared";

const AuthHeader = () => {
  return (
    <>
      <Header className={styles["auth-header"]}>
        <AuthTitle>Добро пожаловать!</AuthTitle>
      </Header>
    </>
  );
};

export default AuthHeader;
