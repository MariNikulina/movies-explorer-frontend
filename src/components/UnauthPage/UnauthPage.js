import React from "react";
import { Link  } from "react-router-dom";
import logoPath from "../../images/header-logo.svg";
import "./UnauthPage.css";

function UnauthPage ({ title, children, text, link, linkText}) {
  return (
    <section className="unauth-page">
      <div className="unauth-page__container">
        <Link to="/" className="unauth-page__logo-link">
          <img className="unauth-page__logo" alt="Логотип" src={logoPath} />
        </Link>
        <h1 className="unauth-page__title">{title}</h1>
        {children}
        <div className="unauth-page__redirection">
          <p className="unauth-page__text">{text}</p>
          <Link to={link} className="unauth-page__link">{linkText}</Link>
        </div>
      </div>
    </section>
  )
};

export default UnauthPage;
