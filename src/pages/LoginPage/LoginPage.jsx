import React, { useEffect } from "react";
import { Login, AuthHeader } from "../../components";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ handleLogin, isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/movies");
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <AuthHeader />
      <Login handleLogin={handleLogin} />
    </>
  );
};

export default LoginPage;
