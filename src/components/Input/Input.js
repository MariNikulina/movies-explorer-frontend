import React from "react";
import "./Input.css";

function Input ({ label, type, placeholder, minLength, maxLength, nameInput }) {
  return (
    <label class="input__label">{label}
      <input
      type={type}
      className="input__field"
      placeholder={placeholder}
      name={nameInput}
      minLength={minLength}
      maxLength={maxLength}
      required
      />
      <span class="input__error" id={`${nameInput}-error`}></span>
    </label>
  )
};

export default Input;
