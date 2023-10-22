import React from "react";
import UnauthPage from "../UnauthPage/UnauthPage";
import Input from "../Input/Input";
import { inputsRegister } from "../../utils/constants";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import "./Register.css";

function Register ({ onRegister, onLogin }) {

  const [ errorServer, setErrorServer ] = React.useState("");

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  console.log("hello")
  console.log(values)

  function handleSubmit(e) {
    e.preventDefault();
    setErrorServer("");
    const { name, email, password } = values;
    console.log("123")
    console.log(name)
    onRegister( name, email, password )
    .catch((err) => {
      console.log(err)
      setErrorServer(err.message);
    })

    resetForm();
  };

  return (
    <UnauthPage title="Добро пожаловать!" text="Уже зарегистрированы?" link="/signin" linkText="Войти">
      <form action="#" className="form-register" name="register" onSubmit={handleSubmit} noValidate>
        <fieldset className="form-register__input-container">
          {inputsRegister.map((input) => (
            <Input key={input.id} {...input} errors={errors} handleChange={handleChange} values={values} />
          ))}
        </fieldset>
        <span className="form-register__error-request">{errorServer}</span>
        <input
        disabled={!isValid}
        type="submit"
        className={`form-register__button ${isValid ? "" : "form-register__button_disabled"}`}
        value="Зарегистрироваться"
        />
      </form>
    </UnauthPage>
  )
};

export default Register;
