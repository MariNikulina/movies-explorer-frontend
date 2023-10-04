import React from "react";
import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import { inputsRegister } from "../../utils/constants";
import "./Register.css";

function Register () {
  return (
    <UnauthPage title="Добро пожаловать!" text="Уже зарегистрированы?" link="/signin" linkText="Войти">
      <form action="#" className="register__form" name="register" noValidate>
        <fieldset class="register__input-container">
          {inputsRegister.map((input) => (
            <Input key={input.id} {...input} />
          ))}
        </fieldset>
        <input type="submit" className="register__button" value="Зарегистрироваться" />
      </form>
    </UnauthPage>
  )
};

export default Register;
