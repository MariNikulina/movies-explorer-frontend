import React from "react";
import "../Container/Container.css";
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies ({ isLoading, locationSavedMovies }) {

  return (
    <Container>
      <SearchForm />
      {isLoading && <Preloader />}
      <MoviesCardList locationSavedMovies={locationSavedMovies}/>
    </Container>
  )
};

export default Movies;
