import React from "react";
import Project from "./components/Project";
import { projectType } from "../../utils/constants";
import "./Portfolio.css";

function Portfolio () {

  return (
    <section className="portfolio container__padding-big">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        {projectType.map((type) => (
          <Project key={type.id} {...type} />
        ))}
      </ul>


    </section>
  )
};

export default Portfolio;
