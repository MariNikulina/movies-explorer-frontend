import React from "react";
import TitleSections from "../TitleSections/TitleSections";
import "./Techs.css";
import { tools } from "../../utils/constants";
import ToolName from "./components/ToolName";

function Techs () {

  return (
    <section className="techs container__padding-big">
      <TitleSections title="Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
      { tools.map((tool) => (
        <ToolName key={tool} name={tool} />
        ))}
      </ul>
    </section>
  )
};

export default Techs;
