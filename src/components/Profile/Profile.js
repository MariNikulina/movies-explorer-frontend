import React from "react";
import "./Profile.css";

function Profile () {

  const isEdited = false;
  const isDisabled = true;

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Марина!</h1>
      <form action="#" className="profile__form" name="profile-form" novalidate>
          <fieldset className="profile__input-container">
            <label className="profile__label">Имя
              <input type="text" className="profile__input" placeholder="Имя" name="inputName" required />
              <span className="profile__error" id="inputName-error"></span>
              </label>
            <label className="profile__label">E-mail
              <input type="email" className="profile__input" placeholder="E-mail" name="inputEmail" required />
              <span className="profile__error" id="inputEmail-error"></span>
            </label>
          </fieldset>
          <span className="profile__error-request">nmvjhv,</span>
          {!isEdited && <input type="submit" className="profile__button-edit" value="Редактировать" />}
          {isEdited && <input
          type="submit"
          className={`profile__button-save ${isDisabled ? "profile__button-save_disabled" : ""}`}
          value="Сохранить"
          />}
        </form>
        {!isEdited && <button
        className="profile__button-exit"
        type="button"
        aria-label="Выйти из аккаунта">Выйти из аккаунта</button>}
    </section>
  )
};

export default Profile;
