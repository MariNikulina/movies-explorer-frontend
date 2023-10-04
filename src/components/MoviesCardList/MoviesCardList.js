import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { movies } from "../../utils/constants";

function MoviesCardList ({ locationSavedMovies, isScreenSm }) {

  return (
    <section className={`movies ${locationSavedMovies ? "movies_padding_big" : ""} container__section_padding_small`}>
      <ul className="movies__list">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} {...movie} locationSavedMovies={locationSavedMovies} isScreenSm={isScreenSm} />
        ))}
      </ul>
      {!locationSavedMovies && <button type="button" className="movies__button">Ещё</button>}
    </section>
  )
};

export default MoviesCardList;
