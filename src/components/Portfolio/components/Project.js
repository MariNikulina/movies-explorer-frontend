import React from "react";
import "./Project.css";

function Project ({ link, type }) {

  return (
    <li className="project">
      <a href={link} target="_blank" rel="noreferrer" className="project__link">
        <p className="project__type">{type}</p>
        <div className="project__icon"></div>
      </a>
    </li>
  )
};

export default Project;
