import React from "react";
import "./Input.css";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function Input ({ label, type, placeholder, minLength, maxLength, pattern, nameInput, values, errors, handleChange }) {

  return (
    <label className="input-label">{label}
      <input
      type={type}
      className={`input-label__field ${errors[nameInput] ? "input-label__field_type_error" : ""}`}
      placeholder={placeholder}
      name={nameInput}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
      value={values[nameInput] || ""}
      onChange={handleChange}
      required
      />
      <span className="input-label__error" id={`${nameInput}-error`}>{errors[nameInput]}</span>
    </label>
  )
};

export default Input;
