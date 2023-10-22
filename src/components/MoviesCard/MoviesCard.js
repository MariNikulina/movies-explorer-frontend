import React from "react";
import { useResize } from "../../utils/useResize";
import "./MoviesCard.css";

function MoviesCard ({ movie, locationSavedMovies, onClick, savedMovies, ...props }) {

  const resize = useResize();

  const getMovieDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const hoursStr = hours > 0 ? `${hours}ч` : '';
    const minutes = duration - hours * 60;
    const minutesStr = minutes > 0 ? `${minutes}м` : '';
    return `${hoursStr} ${minutesStr}`;
  };

  const paramsFunctionOnClick = ({
    country: props.country,
    director: props.director,
    duration: props.duration,
    year: props.year,
    description: props.description,
    image: `https://api.nomoreparties.co/${props.image.url}`,
    trailerLink: props.trailerLink,
    nameRU: props.nameRU,
    nameEN: props.nameEN,
    thumbnail: `https://api.nomoreparties.co/${props.image.formats.thumbnail.url}`,
    movieId: props.id
  });

  const isSavedMovies = Array.from(savedMovies).some(movie => movie.movieId === props.id);
  /*const isSavedMovies = savedMovies.some(movie => movie.id === props.id);*/
  const buttonMovieClassSaved = isSavedMovies ? "movie__button_type_saved" : "";
  const buttonMovieClassLocationSaved = locationSavedMovies ? "movie__button_type_deleted-unvisible" : "";
  const buttonMovieClassScreenXSm = resize.isScreenXSm ? "" : "movie__button_type_deleted-visible";

  function handleClick() {
    onClick(paramsFunctionOnClick);

  }

  return (
    <li className="movie">
      <a href={props.trailerLink} className="movie__link" target="_blank" rel="noreferrer">
        <img className="movie__image" alt={props.nameRU} src={`https://api.nomoreparties.co/${props.image.url}`} />
      </a>
      <div className="movie__wrap">
        <h2 className="movie__title">{props.nameRU}</h2>
        <button
        type="button"
        className={`movie__button ${buttonMovieClassSaved} ${buttonMovieClassLocationSaved} ${buttonMovieClassScreenXSm}`}
        aria-label="Нравится"
        onClick={handleClick}></button>
      </div>
      <p className="movie__duration">{getMovieDuration(props.duration)}</p>
    </li>
  )
};

export default MoviesCard;
