import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox () {
  return (
    <div className="switch">
      <label className="switch__label">
        <input className="switch__checkbox" type="checkbox" name="checkbox" />
        <span className="switch__slider"></span>
      </label>
      <h2 className="switch__title">Короткометражки</h2>
    </div>
  )
};

export default FilterCheckbox;
