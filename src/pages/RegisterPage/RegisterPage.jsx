import React from "react";
import { Register, AuthHeader } from "../../components";

const RegisterPage = ({ handleRegister }) => {
  return (
    <>
      <AuthHeader />
      <Register handleRegister={handleRegister} />
    </>
  );
};

export default RegisterPage;
