import React from "react";
import { useResize } from "../../utils/useResize";
import "./MoviesCard.css";

function MoviesCard ({ trailerLink, image, name, duration, locationSavedMovies }) {

  const resize = useResize();

  return (
    <li className="movie">
      <a href={trailerLink} className="movie__link" target="_blank" rel="noreferrer">
        <img className="movie__image" alt="Постер к фильму" src={image} />
      </a>
      <div className="movie__wrap">
        <h2 className="movie__title">{name}</h2>
        <button
        type="button"
        className={`movie__button ${locationSavedMovies ? "movie__button_type_deleted-unvisible" : ""} ${resize.isScreenSm ? "" : "movie__button_type_deleted-visible"}`}
        aria-label="Нравится"></button>
      </div>
      <p className="movie__duration">{duration}</p>
    </li>
  )
};

export default MoviesCard;
