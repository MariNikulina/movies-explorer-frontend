import React from "react";
import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import { inputsLogin } from "../../utils/constants";
import "./Login.css"

function Login () {
   return (
    <UnauthPage title="Рады видеть!" text="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация">
      <form action="#" className="form-login" name="login">
        <fieldset class="form-login__input-container">
          {inputsLogin.map((input) => (
            <Input key={input.id} {...input} />
          ))}
        </fieldset>
        <input type="submit" className="form-login__button" value="Войти" />
      </form>
    </UnauthPage>
   )
};

export default Login;
