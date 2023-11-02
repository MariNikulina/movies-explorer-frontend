import React from "react";
import "../Container/Container.css";
import LayoutForMoviesPage from "../LayoutForMoviesPage/LayoutForMoviesPage";
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies ({ loggedIn, openMenu, onSubmitHandler, onChangeCheckbox, onClick, onShowMore, checked, error, isLoading, movieNotFound, movies, moviesShow, savedMovies, isHiddenButtonShowMore  }) {

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
        {movies && <MoviesCardList
        movies={moviesShow}
        onClick={onClick}
        savedMovies={savedMovies}
        onShowMore={onShowMore}
        isHiddenButtonShowMore={isHiddenButtonShowMore}
        />}
      </Container>
    </LayoutForMoviesPage>

  )
};

export default Movies;
