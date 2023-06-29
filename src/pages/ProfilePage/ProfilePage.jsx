import React from "react";
import { Profile } from "../../components";
import { Header, HeaderContent } from "../../components/shared";

const ProfilePage = ({ setIsLoggedIn }) => {
  return (
    <>
      <Header>
        <HeaderContent />
      </Header>
      <Profile setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};

export default ProfilePage;
