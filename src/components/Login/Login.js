import React from "react";
import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import { inputsLogin } from "../../utils/constants";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import "./Login.css"

function Login ({ onLogin }) {

  const [ errorServer, setErrorServer ] = React.useState("");

  const { values, handleChange, handleChangeEmail, errors, isValidInputs, resetForm } = useFormWithValidation();

  function handleSubmit(e) {

    e.preventDefault();
    const { email, password } = values;

    onLogin(email, password)
    .then((res) => {
      resetForm();
    })
    .catch((err) => {
      setErrorServer(err.message);
    })
  };

   return (
    <UnauthPage title="Рады видеть!" text="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация">
      <form action="#" className="form-login" name="login" onSubmit={handleSubmit} noValidate>
        <fieldset className="form-login__input-container">
          {inputsLogin.map((input) => (
            <Input
            key={input.id}
            {...input}
            errors={errors}
            handleChange={input.type === "email" ? handleChangeEmail : handleChange }
            values={values}
            />
          ))}
        </fieldset>
        <span className="form-login__error-request">{errorServer}</span>
        <input
        disabled={!isValidInputs}
        type="submit"
        className={`form-login__button ${isValidInputs ? "" : "form-login__button_disabled"}`}
        value="Войти"
        />
      </form>
    </UnauthPage>
   )
};

export default Login;
