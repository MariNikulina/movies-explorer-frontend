import React from "react";
import TitleSections from "../TitleSections/TitleSections";
import { diplomaDescriptions } from "../../utils/constants";
import DiplomaDescriptions from "./components/DiplomaDescriptions";
import "./AboutProject.css";

function AboutProject() {

  return (
    <section className="about-project container__padding-big" id={"project"}>
      <TitleSections title="О проекте" />
      <div className="about-project__description">
        { diplomaDescriptions.map((description) => (
          <DiplomaDescriptions key={description.id} {...description} />
        ))}
      </div>
      <div className="about-project__duration-table">
        <div className="about-project__duration about-project__duration_width_small">
          <p className="about-project__week about-project__week_color_green">1 неделя</p>
          <p className="about-project__course">Back-end</p>
        </div>
        <div className="about-project__duration about-project__duration_width_big">
          <p className="about-project__week about-project__week_color_grey">4 недели</p>
          <p className="about-project__course">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
