import React, { useState } from "react";
import "./Forminput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...input } = props;
  const handleFocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        {...input}
        onChange={onChange}
        onBlur={handleFocused}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />

      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
