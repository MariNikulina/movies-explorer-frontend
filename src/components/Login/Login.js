import React from "react";
import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import { inputsLogin } from "../../utils/constants";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import "./Login.css"

function Login ({ onLogin }) {

  const [ errorServer, setErrorServer ] = React.useState("");

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {

    e.preventDefault();
    const { email, password } = values;
    onLogin(email, password)
    .catch((err) => {
      setErrorServer(err.message);
    })

    resetForm();
  };

   return (
    <UnauthPage title="Рады видеть!" text="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация">
      <form action="#" className="form-login" name="login" onSubmit={handleSubmit} noValidate>
        <fieldset className="form-login__input-container">
          {inputsLogin.map((input) => (
            <Input key={input.id} {...input} errors={errors} handleChange={handleChange} values={values}  />
          ))}
        </fieldset>
        <span className="form-login__error-request">{errorServer}</span>
        <input
        disabled={!isValid}
        type="submit"
        className={`form-login__button ${isValid ? "" : "form-login__button_disabled"}`}
        value="Войти"
        />
      </form>
    </UnauthPage>
   )
};

export default Login;
