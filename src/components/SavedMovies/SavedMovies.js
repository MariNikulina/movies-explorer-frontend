import React from "react";
import LayoutForMoviesPage from "../LayoutForMoviesPage/LayoutForMoviesPage";
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies ({ loggedIn, openMenu, savedMovies, onSubmitHandler, onChangeCheckbox, checked, error, isLoading, movieNotFound, onClick }) {
  return (
    <LayoutForMoviesPage loggedIn={loggedIn} openMenu={openMenu} >
      <Container>
        <SearchForm
        onSubmitHandler={onSubmitHandler}
        checked={checked}
        onChangeCheckbox={onChangeCheckbox}
        error={error}
        />
        {isLoading && <Preloader />}
        <h2 className="container__title">{movieNotFound}</h2>
        {savedMovies && <MoviesCardList
        movies={savedMovies}
        onClick={onClick}
        savedMovies={savedMovies}
        />}
      </Container>
    </LayoutForMoviesPage>
  )
};

export default SavedMovies;
