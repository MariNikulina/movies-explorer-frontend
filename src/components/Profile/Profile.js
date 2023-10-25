import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile ({ loggedIn, openMenu, handleLogout, onUpdateProfile, userData }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [ isEdited, setIsEdited ] = React.useState(true);
  const [ isSaved, setIsSaved ] = React.useState(false);
  const [ errorServer, setErrorServer ] = React.useState("");
  const [ successUpdate, setSuccessUpdate ] = React.useState(false);

  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  let { name } = currentUser;
  let nameTitle = name.slice(0, 1).toUpperCase() + name.slice(1);

  function changeButton () {
    setIsEdited(false);
    setIsSaved(true);
  };

  function signOut() {
    handleLogout();
    navigate('/', {replace: true});
  };

  function handleSubmit(e) {

    e.preventDefault();
    setErrorServer("");
    const { nameProfile, emailProfile } = values;
    onUpdateProfile( nameProfile, emailProfile )
    .then((res) => {
      setSuccessUpdate(true);
      setErrorServer("Аккаунт успешно обновлен");
    })
    .catch((err) => {
      setErrorServer(err.message);
    })

    resetForm();
  };

  return (
    <div className="content">
      <Header loggedIn={loggedIn} openMenu={openMenu} />
      <main className="profile">
        <h1 className="profile__title">Привет, {nameTitle}!</h1>
        <form action="#" className="profile__form" name="profile-form" onSubmit={handleSubmit} noValidate>
            <fieldset className="profile__input-container">
              <label className="profile__label">Имя
                <input
                type="text"
                name="nameProfile"
                className={`profile__input ${errors["nameProfile"] ? "profile__input_type_error" : ""}`}
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                value={values["nameProfile"] || ""}
                onChange={handleChange}
                required
                />
                <span className="profile__error" id="inputName-error">{errors["nameProfile"]}</span>
                </label>
              <label className="profile__label">E-mail
                <input
                type="email"
                className={`profile__input ${errors["emailProfile"] ? "profile__input_type_error" : ""}`}
                placeholder="E-mail"
                name="emailProfile"
                value={values["emailProfile"] || ""}
                onChange={handleChange}
                required
                />
                <span className="profile__error" id="inputEmail-error">{errors["emailProfile"]}</span>
              </label>
            </fieldset>
            <span className={`profile__error-request ${successUpdate ? "profile__error-request_false" : ""}`}>{errorServer}</span>
            {isEdited && <input type="submit" className="profile__button-edit" value="Редактировать" onClick={changeButton}/>}
            {isSaved && <input
            type="submit"
            disabled={!isValid}
            className={`profile__button-save ${isValid ? "" : "profile__button-save_disabled"}`}
            value="Сохранить"
            />}
          </form>
          {isEdited && <button
          className="profile__button-exit"
          type="button"
          aria-label="Выйти из аккаунта"
          onClick={signOut}>Выйти из аккаунта</button>}
      </main>
    </div>
  )
};

export default Profile;
