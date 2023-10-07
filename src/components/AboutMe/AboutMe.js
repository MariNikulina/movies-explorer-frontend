import React from "react";
import TitleSections from "../TitleSections/TitleSections";
import photoPath from "../../images/big.jpg";
import "./AboutMe.css";

function AboutMe () {
   return (
    <section className="about-me container__padding-middle">
      <TitleSections title="Студент" />
      <article className="about-me__info">
        <img className="about-me__photo" alt="Фотография студента" src={photoPath} />
        <h3 className="about-me__title">Марина</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 36 лет</p>
        <p className="about-me__description">Я живу в Новосибирске. Закончила экономический факультет НГТУ.
          Замужем, двое детей. В декрете решила освоить профессию фронтенд-разработчика, активно занимаюсь обучением.</p>
        {/*<p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
        После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>*/}
        <a href="https://github.com/MariNikulina?tab=repositories" target="_blank" rel="noreferrer" className="about-me__link">
          Github</a>
      </article>
    </section>
   )
};

export default AboutMe;
