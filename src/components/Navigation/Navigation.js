import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import ProfileLink from "../ProfileLink/ProfileLink";

function Navigation ({ isOpened, closeMenu }) {
  return (
    <section className={`nav ${isOpened ? "nav_opened" : ""}`}>
      <div className="nav__container">
        <button className="nav__close" type="button" onClick={closeMenu} aria-label="Закрыть"></button>
        <nav className="nav__menu">
          <NavLink to="/" className={({isActive}) => `nav__link ${isActive ? "nav__link_active" : ""}`}>Главная</NavLink>
          <NavLink to="/movies" className={({isActive}) => `nav__link ${isActive ? "nav__link_active" : ""}`}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({isActive}) => `nav__link ${isActive ? "nav__link_active" : ""}`}>Сохранённые фильмы</NavLink>
        </nav>
        <ProfileLink />
      </div>
    </section>
  )
}

export default Navigation;
