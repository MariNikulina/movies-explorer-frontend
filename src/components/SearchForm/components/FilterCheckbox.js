import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox ({ checked, onChange }) {

  return (
    <div className="switch">
      <label className="switch__label">
        <input className="switch__checkbox" type="checkbox" name="checkbox" checked={checked} onChange={onChange} />
        <span className="switch__slider"></span>
      </label>
      <h2 className="switch__title">Короткометражки</h2>
    </div>
  )
};

export default FilterCheckbox;
