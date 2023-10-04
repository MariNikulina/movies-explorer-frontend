import React from "react";
import "./DiplomaDescriptions.css";

function DiplomaDescriptions ({ title, description }) {
  return (
    <div className="description">
      <h3 className="description__title">{title}</h3>
      <p className="description__text">{description}</p>
    </div>
  )
}

export default DiplomaDescriptions;
