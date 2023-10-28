import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound () {

  let navigate = useNavigate();

  function goToBack() {
    navigate(-1, {replace: false});
  };

  return (
    <section className="not-found">
      <h3 className="not-found__title">
        <span className="not-found__code-error">404</span>Страница не найдена
      </h3>
      <button type="button" className="not-found__link-back" onClick={goToBack}>Назад</button>
    </section>
  )
};

export default PageNotFound;
