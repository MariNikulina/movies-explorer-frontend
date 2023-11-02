import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import isEmail from 'validator/es/lib/isEmail';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isValidEmail, setIsValidEmail ] = React.useState(false);

  const location = useLocation();
  const locationProfile = location.pathname === "/profile";

  useEffect(() => {
    if (locationProfile) {
      setTimeout(() => setIsValid(true), 500);
      setTimeout(() => setIsValidEmail(true), 500);
    }
  }, []);


  const isValidInputs = isValid && isValidEmail;

  const handleChange = (event) => {

    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const handleChangeEmail = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: !isEmail(value) ? "Что-то пошло не так..." : false });
    setIsValidEmail(isEmail(value));
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false, newIsValidEmail = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsValidEmail(newIsValidEmail)
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, handleChangeEmail, errors, isValidInputs, resetForm };
}
