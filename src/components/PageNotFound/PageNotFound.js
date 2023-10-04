import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound () {
  return (
    <section className="not-found">
      <h3 className="not-found__title">
        <span className="not-found__code-error">404</span>Страница не найдена
      </h3>
      <Link to="/" className="not-found__link-back">Назад</Link>
    </section>
  )
};

export default PageNotFound;
