import React from "react";
import { NavLink, Link } from "react-router-dom";
import ProfileLink from "../ProfileLink/ProfileLink";

import "./Header.css";
import "../App/App.css";
import logoPath from "../../images/header-logo.svg";

function Header({ loggedIn, isScreenMd, onGoAnotherPage, locationProject }) {

  return(
    <header className={`header ${locationProject ? "header_color_dark" : ""} page__section`}>
      <Link to="/" className="header__link-logo">
        <img src={logoPath} alt="Логотип" className="header__logo" />
      </Link>
      {loggedIn ? (
        <div>
          {isScreenMd &&
          <nav className="header__navbar-films">
            <NavLink
            to="/movies"
            className={({isActive}) => `header__link-films ${isActive ? "header__link-films_active" : ""}`}>Фильмы</NavLink>
            <NavLink
            to="/saved-movies"
            className={({isActive}) => `header__link-films ${isActive ? "header__link-films_active" : ""}`}>Сохраненные фильмы</NavLink>
          </nav>}
          {isScreenMd &&
          <nav className="header__navbar-auth">
            <ProfileLink locationProject={locationProject} />
          </nav>}
          {!isScreenMd && <button className={`header__burger ${locationProject ? "header__burger_color_white" : ""}`} onclick={onGoAnotherPage} aria-label="Перейти"></button>}
        </div>
      ) : (
        <nav className="header__navbar-auth">
          <Link to="/signup" className="header__link-auth">Регистрация</Link>
          <Link to="/signin" className="header__link-auth">
            <p className="header__link-signin">Войти</p>
          </Link>
      </nav>
    )}

      </header>

      );
}

export default Header;

