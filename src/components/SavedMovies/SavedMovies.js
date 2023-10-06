import React from "react";
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies ({ isLoading, onSubmit }) {
  return (
    <Container>
      <SearchForm onSubmit={onSubmit} />
      {isLoading && <Preloader />}
      <MoviesCardList />
    </Container>
  )
};

export default SavedMovies;
