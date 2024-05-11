import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css"; // Import CSS for styling
import { fields } from "../api/data";

const DropDown = () => {
  const initialState = [
    { id: 1, label: "Checkbox 1", checked: false },
    { id: 2, label: "Checkbox 2", checked: false },
    { id: 3, label: "Checkbox 3", checked: false },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [checkboxes, setCheckboxes] = useState(initialState);
  const [dropSelected, setDropSelected] = useState("");
  const [activeField, setActiveField] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    toast.success(`Radio ${selectedValue} clicked!`);
  };

  const handleDropOptionChange = (event) => {
    const dropSelected = event.target.value;
    setDropSelected(dropSelected);
    toast.success(`DropMenu ${dropSelected} clicked!`);
  };

  const handleCheckboxChange = (id, label, checked) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => (checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox));
    setCheckboxes(updatedCheckboxes);
    if (!checked) {
      toast.success(`${label}" selected!`);
    } else {
      toast.success(`${label}" unselected!`);
    }
  };

  const handleFieldHover = (field, subMenu) => {
    setActiveField(field);
    setSelectedSubMenu(subMenu);
    setShowSubMenu(true);
  };

  const handleFieldLeave = () => {
    setActiveField("");
    setShowSubMenu(false);
  };

  const handleSubMenuClick = (subMenu) => {
    setSelectedSubMenu(subMenu);
    setShowSubMenu(false);
    toast.success(`Selected submenu: ${subMenu}`);
  };

  return (
    <div>
      <div className="actionsContainer">
        <div className="actionContent headerStyle">
          <h1>Dropdown Menus, Radio Buttons & Checkboxes</h1>
          <p>
            Use this webpage to interact with dropdown menus, radio buttons and checboxes. Try to instruct your Selenium tests to interact
            with these elements.
          </p>
          <div className="popupButtonsContainer">
            {/*  */}
            <div className="actionButtonGroup">
              <h2>Radio Buttons</h2>
              <div>
                <p>Select an Option</p>
                <div>
                  <label className="label">
                    <input type="radio" value="option1" checked={selectedOption === "option1"} onChange={handleOptionChange} />
                    Option 1
                  </label>
                </div>
                <div>
                  <label className="label">
                    <input type="radio" value="option2" checked={selectedOption === "option2"} onChange={handleOptionChange} />
                    Option 2
                  </label>
                </div>
                <div>
                  <label className="label">
                    <input type="radio" value="option3" checked={selectedOption === "option3"} onChange={handleOptionChange} />
                    Option 3
                  </label>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="actionButtonGroup">
              <h2>Checkboxes</h2>
              <p>Test the checkbox options, below:</p>
              <div className="checkboxContainer">
                {checkboxes.map((checkbox) => (
                  <label key={checkbox.id} className="checkboxLabel">
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleCheckboxChange(checkbox.id, checkbox.label, checkbox.checked)}
                    />
                    {checkbox.label}
                  </label>
                ))}
              </div>
            </div>
            <div className="actionButtonGroup">
              <div>
                <h2>Select an Option</h2>
                <select value={dropSelected} onChange={handleDropOptionChange}>
                  <option value="">Select</option>
                  <option value="option 1">Option 1</option>
                  <option value="option 2">Option 2</option>
                  <option value="option 3">Option 3</option>
                  <option value="option 4">Option 4</option>
                  <option value="option 5">Option 5</option>
                </select>
                <p>Selected Option: {dropSelected}</p>
              </div>
            </div>
          </div>
          <div className="popupButtonsContainer">
            <div className="actionButtonGroup">
              <h2>Navigation Menu</h2>
              <p>Test the navigation menu, below:</p>
              <input type="text" value={selectedSubMenu} readOnly />
              <nav>
                <ul className="headerMenu">
                  {fields.map((field, index) => (
                    <li key={index} onMouseEnter={() => handleFieldHover(field.name, field.subMenu)} onMouseLeave={handleFieldLeave}>
                      {field.name}
                      {activeField === field.name && showSubMenu && (
                        <ul className="subMenu">
                          {field.subMenu.map((item, subIndex) => (
                            <li key={subIndex} onClick={() => handleSubMenuClick(item)}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="actionButtonGroup">
              <h2>Demo Box</h2>
              <p>Demo Para</p>
            </div>
          </div>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default DropDown;
