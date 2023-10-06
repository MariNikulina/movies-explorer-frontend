import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { movies } from "../../utils/constants";

function MoviesCardList () {

  const location = useLocation();
  const locationSavedMovies = location.pathname === "/saved-movies";

  return (
    <section className={`movies ${locationSavedMovies ? "movies_padding_big" : ""} container__padding-small`}>
      <ul className="movies__list">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} {...movie} locationSavedMovies={locationSavedMovies} />
        ))}
      </ul>
      {!locationSavedMovies && <button type="button" className="movies__button">Ещё</button>}
    </section>
  )
};

export default MoviesCardList;
