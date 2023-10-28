import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import isEmail from 'validator/es/lib/isEmail';

function Profile ({ loggedIn, openMenu, handleLogout, onUpdateProfile, userData }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [ isEdited, setIsEdited ] = React.useState(true);
  const [ isSaved, setIsSaved ] = React.useState(false);
  const [ errorServer, setErrorServer ] = React.useState("");
  const [ successUpdate, setSuccessUpdate ] = React.useState(false);

  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const { nameProfile, emailProfile } = values;

  const { name, email } = currentUser;
  const nameTitle = name.slice(0, 1).toUpperCase() + name.slice(1);

  React.useEffect(() => {
    resetForm({ nameProfile: name, emailProfile: email });
  }, [currentUser]);

  function changeButton () {
    setIsEdited(false);
    setIsSaved(true);
  };

  function signOut() {
    handleLogout();
    navigate('/', {replace: true});
  };

  function isDisabled() {
    if (name === nameProfile && email === emailProfile) {
      return true;
    } else {
      return !isValid;
    };
  };

  function handleSubmit(e) {

    e.preventDefault();
    setErrorServer("");
    setSuccessUpdate(false)

    onUpdateProfile( nameProfile, emailProfile )
    .then((res) => {
      setSuccessUpdate(true);
      setErrorServer("Аккаунт успешно обновлен");
    })
    .then((res) => {
      resetForm();
    })
    .catch((err) => {
      setErrorServer(err);
    })
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
                pattern={isEmail}
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
                pattern={isEmail}
                required
                />
                <span className="profile__error" id="inputEmail-error">{errors["emailProfile"]}</span>
              </label>
            </fieldset>
            <span className={`profile__error-request ${successUpdate ? "profile__error-request_false" : ""}`}>{errorServer}</span>
            {isEdited && <input type="submit" className="profile__button-edit" value="Редактировать" onClick={changeButton}/>}
            {isSaved && <input
            type="submit"
            disabled={isDisabled()}
            className={`profile__button-save ${!isDisabled() ? "" : "profile__button-save_disabled"}`}
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
