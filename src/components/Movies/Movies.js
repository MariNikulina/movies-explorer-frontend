import React from "react";
import "../Container/Container.css";
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies ({ isLoading, onSubmit }) {

  return (
    <Container>
      <SearchForm onSubmit={onSubmit} />
      {isLoading && <Preloader />}
      <MoviesCardList />
    </Container>
  )
};

export default Movies;
