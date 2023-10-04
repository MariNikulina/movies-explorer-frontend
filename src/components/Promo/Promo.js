import React from "react";
import "./Promo.css";
import "../Main/Main.css"

function Promo () {

  return(
    <section className="promo container__section_padding_big">
      <div className="promo__logo"></div>
      <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a href="#project" className="promo__link">Узнать больше</a>
    </section>
  )

}

export default Promo;
