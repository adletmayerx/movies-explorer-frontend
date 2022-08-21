import React from "react";
import { SavedMovies } from "../../components";
import { Header, HeaderContent, Footer } from "../../components/shared";

const SavedMoviesPage = () => {
  return (
    <>
      <Header>
        <HeaderContent />
      </Header>
      <SavedMovies />
      <Footer />
    </>
  );
};

export default SavedMoviesPage;
