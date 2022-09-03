import React, { useEffect } from "react";
import { Register, AuthHeader } from "../../components";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ handleRegister, isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/movies");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <AuthHeader />
      <Register handleRegister={handleRegister} />
    </>
  );
};

export default RegisterPage;
