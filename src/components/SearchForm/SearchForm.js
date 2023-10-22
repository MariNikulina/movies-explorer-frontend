import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "./components/FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm ({ onSubmitHandler, checked, onChangeCheckbox, error }) {

  const [ formData, setFormData ] = React.useState("");

  const location = useLocation();
  const locationMovies = location.pathname === "/movies";

  const searchQuery = localStorage.getItem("searchQuery") || "";

  React.useEffect(() => {
    if (locationMovies) {
      setFormData(searchQuery);
    }
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    if (locationMovies) {
      localStorage.setItem("searchQuery", formData);
    }
    onSubmitHandler(formData);
  };

  return (
    <section className="seacher container__padding-small">
      <div className="seacher__container">
        <form className="seacher__form" action="#" onSubmit={onSubmit} name="seacher-all" noValidate>
          <fieldset className="seacher__input-container">
            <label className="seacher__label">
              <input
              className="seacher__input"
              placeholder="Фильм"
              name="inputAll"
              required
              type="text"
              value={formData || ""}
              onChange={(e) => setFormData(e.target.value)}
             />
              <span className="seacher__error">{error}</span>
            </label>
          </fieldset>
          <input className="seacher__button" type="submit" value="Найти" />
        </form>
      </div>
      <FilterCheckbox checked={checked} onChange={onChangeCheckbox} />
    </section>

  )
};

export default SearchForm;
