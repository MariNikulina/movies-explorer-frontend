import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "./components/FilterCheckbox";

function SearchForm ({ onSubmit }) {

  return (
    <section className="seacher container__padding-small">
      <div className="seacher__container">
        <form className="seacher__form" action="#" onSubmit={onSubmit} name="seacher-all" noValidate>
          <fieldset className="seacher__input-container">
            <label className="seacher__label">
              <input className="seacher__input" placeholder="Фильм" name="inputAll" required type="text" />
              <span className="seacher__error"></span>
            </label>
          </fieldset>
          <input className="seacher__button" type="button" value="Найти" />
        </form>
      </div>
      <FilterCheckbox />
    </section>

  )
};

export default SearchForm;
