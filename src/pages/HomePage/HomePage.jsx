import React from "react";
import { Landing } from "../../components";

const HomePage = ({isLoggedIn}) => {
  return (
    <>
      <Landing isLoggedIn={isLoggedIn} />
    </>
  );
};

export default HomePage;
