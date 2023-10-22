import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList ({ movies, onClick, savedMovies, onShowMore, isHiddenButtonShowMore }) {

  const location = useLocation();
  const locationSavedMovies = location.pathname === "/saved-movies";
  const isHiddenButton = !locationSavedMovies && !isHiddenButtonShowMore;

  return (
    <section className={`movies ${locationSavedMovies ? "movies_padding_big" : ""} container__padding-small`}>
      <ul className="movies__list">
        {movies.map((movieElement) => (
          <MoviesCard
          movie={movieElement}
          key={movieElement.id}
          {...movieElement}
          locationSavedMovies={locationSavedMovies}
          onClick={onClick}
          savedMovies={savedMovies}
          />
        ))}
      </ul>
      {isHiddenButton && <button type="button" className="movies__button" onClick={onShowMore}>Ещё</button>}
    </section>
  )
};

export default MoviesCardList;
