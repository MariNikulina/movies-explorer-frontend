import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useResize } from "../../utils/useResize";
import ProfileLink from "../ProfileLink/ProfileLink";

import "./Header.css";
import "../App/App.css";
import logoPath from "../../images/header-logo.svg";

function Header({ loggedIn, openMenu, headerColorProject, burgerColorProject, profileButtonColorProject }) {

  const resize = useResize();

  return(
    <header className={`header ${headerColorProject || ""} content__section`}>
      <Link to="/" className="header__link-logo">
        <img src={logoPath} alt="Логотип" className="header__logo" />
      </Link>
      {loggedIn ? (
        <div>
          {resize.isScreenMd &&
          <nav className="header__navbar-films">
            <NavLink
            to="/movies"
            className={({isActive}) => `header__link-films ${isActive ? "header__link-films_active" : ""}`}>Фильмы</NavLink>
            <NavLink
            to="/saved-movies"
            className={({isActive}) => `header__link-films ${isActive ? "header__link-films_active" : ""}`}>Сохраненные фильмы</NavLink>
          </nav>}
          {resize.isScreenMd &&
          <nav className="header__navbar-auth">
            <ProfileLink profileButtonColorProject={profileButtonColorProject} />
          </nav>}
          {!resize.isScreenMd && <button className={`header__burger ${burgerColorProject}`} onClick={openMenu} aria-label="Перейти"></button>}
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

