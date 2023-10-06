import React from "react";
import "./Input.css";

function Input ({ label, type, placeholder, minLength, maxLength, nameInput }) {
  return (
    <label class="input-label">{label}
      <input
      type={type}
      className="input-label__field"
      placeholder={placeholder}
      name={nameInput}
      minLength={minLength}
      maxLength={maxLength}
      required
      />
      <span class="input-label__error" id={`${nameInput}-error`}></span>
    </label>
  )
};

export default Input;
