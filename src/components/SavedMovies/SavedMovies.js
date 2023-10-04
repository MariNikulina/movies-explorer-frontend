import React from "react";
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies ({ locationSavedMovies, isScreenSm }) {
  return (
    <Container>
      <SearchForm />
      <MoviesCardList locationSavedMovies={locationSavedMovies} isScreenSm={isScreenSm} />
    </Container>
  )
};

export default SavedMovies;
