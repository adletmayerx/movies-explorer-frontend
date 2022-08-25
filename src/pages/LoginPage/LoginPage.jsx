import React from "react";
import { Login, AuthHeader } from "../../components";

const LoginPage = ({handleLogin}) => {
  return (
    <>
      <AuthHeader />
      <Login handleLogin={handleLogin}/>
    </>
  );
};

export default LoginPage;
