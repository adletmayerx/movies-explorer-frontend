import React from "react";
import { SearchForm } from "../../components";
import { Header, HeaderContent } from "../../components/shared";

const MoviesPage = () => {
  return (
    <>
      <Header>
        <HeaderContent />
      </Header>
      <SearchForm />
    </>
  );
};

export default MoviesPage;
