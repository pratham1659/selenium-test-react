import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css"; // Assuming you have a CSS file for styling

function Buttons({ onClick, onRadioChange, onCheckboxChange }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonDisabledCheckBox, setButtonDisabledCheckBox] = useState(true);

  const handleButtonClick = () => {
    if (!buttonDisabled) {
      toast.success("Button Enabled");
    } else {
      toast.success("Disabled Button Click Found!");
    }
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
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Buttons;
