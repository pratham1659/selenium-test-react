import React from "react";
import "./styles.css";

function ButtonComponent({ onRadioChange, onCheckboxChange }) {
  return (
    <div className="btn-list">
      <div>
        <input type="radio" id="radioButton" name="radioButton" onChange={onRadioChange} />
        <label htmlFor="radioButton">Radio Button</label>
      </div>
      <div>
        <input type="checkbox" id="checkbox" onChange={onCheckboxChange} />
        <label htmlFor="checkbox">Checkbox</label>
      </div>
    </div>
  );
}

export default ButtonComponent;
