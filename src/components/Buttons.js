import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css"; // Assuming you have a CSS file for styling

function Buttons({ onClick, onRadioChange, onCheckboxChange }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [showHiddenButton, setShowHiddenButton] = useState(false);
  const [buttonDisabledCheckBox, setButtonDisabledCheckBox] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Function to toggle dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setHovered(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 3000); // 3-second delay
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHovered(false);
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    if (!buttonDisabled) {
      toast.success("Button Enabled");
    } else {
      toast.success("Disabled Button Click Found!");
    }
  };

  const handleClick = (link) => {
    toast.success(`You clicked on ${link}`);
  };

  const enableButton = () => {
    if (!buttonDisabled) {
      toast.success("Cannot enable button internally!");
    } else {
      setButtonDisabled(false);
    }
  };

  const handleCheckboxChange = () => {
    setButtonDisabledCheckBox(true); // Disable the button when checkbox is clicked
    setTimeout(() => {
      setButtonDisabledCheckBox(false); // Enable the button after 3 seconds
      toast.success("Button Enabled");
    }, 3000); // 5000 milliseconds = 5 seconds
  };

  const handleHiddenButtonChange = (event) => {
    setCheckboxChecked(event.target.checked);
    if (event.target.checked) {
      setTimeout(() => {
        setShowHiddenButton(true);
      }, 3000); // 5000 milliseconds = 5 seconds
    } else {
      setShowHiddenButton(false);
    }
  };

  const showMessage = (message) => {
    toast.success(message);
  };

  return (
    <div className="actionsContainer">
      <div className="actionContent headerStyle">
        <h1>Testing Buttons</h1>
        <p>Attempt to click the buttons using the instructions for each button below. There are various ways you can click buttons.</p>
        <div className="popupButtonsContainer">
          <div className="actionButtonGroup actionButton">
            <h2>WebElement.click()</h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>Try interacting with the button below</li>
              <li>Use an XPATH locator</li>
              <li>
                Try method: <strong>click()</strong>
              </li>
            </ul>
            <button onClick={() => showMessage("Button clicked!")}>Button Click</button>
          </div>
          <div className="actionButtonGroup actionButton">
            <h2>JavaScript click</h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>Try interacting with the button below</li>
              <li>Use a CSS locator: </li>
              <li>
                Try method:
                <strong> JavaScript click</strong>
              </li>
            </ul>
            <button onClick={() => showMessage("Button JS clicked!")}>Button JS Click</button>
          </div>
          <div className="actionButtonGroup actionButton">
            <h2>Action Move & Click</h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>Try interacting with the button below</li>
              <li>Use an locator of your choice</li>
              <li>
                Try method: <strong>Action Move & Click</strong>
              </li>
            </ul>
            <button onClick={() => showMessage("Button Action clicked!")}>Button Action Click</button>
          </div>
          {/*  */}
          <div className="actionButtonGroup actionButton">
            <h2>Delayed Dropdown</h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>Try interacting with the button below</li>
              <li>Use wait to validate dropdown menus</li>
              <li>
                Try wait: <strong>Explicit Wait</strong>
              </li>
            </ul>
            <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button onClick={toggleMenu} id="dropdown-btn">
                Dropdown Menu
              </button>
              <div className={`dropdown-menu ${isOpen && hovered ? "open" : ""}`}>
                {isOpen && (
                  <ul>
                    <li onClick={() => handleClick("Link 1")}>Link 1</li>
                    <li onClick={() => handleClick("Link 2")}>Link 2</li>
                    <li onClick={() => handleClick("Link 3")}>Link 3</li>
                  </ul>
                )}
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div className="popupButtonsContainer">
          <div className="actionButtonGroup actionButton">
            <h2>Disabled Button</h2>
            <ul className="custom-list">
              <li>Try interacting with the button below</li>
              <li>Use an locator of your choice</li>
              <li>
                Try method: <strong>isEnabled()</strong>
              </li>
            </ul>
            <button onClick={handleButtonClick} name="disableBtn" disabled={buttonDisabled}>
              Disabled button
            </button>
            <button onClick={enableButton}>Enable Button</button>
          </div>
          <div className="actionButtonGroup actionButton">
            <h2>Double Click Button</h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>Try interacting with the button below</li>
              <li>Use an locator of your choice</li>
              <li>
                Try method: <strong>doubleClick()</strong>
              </li>
            </ul>
            <button onDoubleClick={() => showMessage("Double Click Found!")}>Double Click Button</button>
          </div>
          <div className="actionButtonGroup actionButton">
            <h2>Disabled Button</h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>Try interacting with the button below</li>
              <li>
                Try method: <strong>isEnabled()</strong>
              </li>
              <li>
                Checkbox:
                <input type="checkbox" onChange={handleCheckboxChange} />
              </li>
              <li>Note: When User click on checkbox after 3 seconds button will enabled</li>
            </ul>
            <button
              className={buttonDisabledCheckBox ? "disabled" : "enabled"}
              name="checkDisabledButton"
              disabled={buttonDisabledCheckBox}
              onClick={() => showMessage("Disabled Button Click Found!")}>
              Disabled button
            </button>
          </div>
          <div className="actionButtonGroup actionButton">
            <h2>Hidden Button</h2>
            <ul style={{ listStyleType: "disc" }}>
              <li>Try interacting with the button below</li>
              <li>
                Try method: <strong>isDisplayed()</strong>
              </li>
              <li>
                Checkbox:
                <input type="checkbox" onChange={handleHiddenButtonChange} />
              </li>
              <li>Note: When User click on checkbox after 5 seconds button will display</li>
            </ul>
            <div className="hiddenBorder">
              <button
                className={checkboxChecked ? "enabled" : "disabled"}
                name="checkHiddenButton"
                id="hiddenBtn"
                hidden={!showHiddenButton}
                onClick={() => showMessage("Hidden Button Click Found!")}>
                Hidden button
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Buttons;
