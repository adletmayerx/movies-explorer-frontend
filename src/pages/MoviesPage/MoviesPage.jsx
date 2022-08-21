import React from "react";
import { Movies } from "../../components";
import { Header, HeaderContent, Footer } from "../../components/shared";

const MoviesPage = () => {
  return (
    <>
      <Header>
        <HeaderContent />
      </Header>
      <Movies />
      <Footer />
    </>
  );
};

export default MoviesPage;
