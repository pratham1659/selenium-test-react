import React from "react";
import "./styles.css"; // Import CSS for styling

const PopupAlert = () => {
  const openPopup = () => {
    window.open("https://www.google.com/", "Popup Window", "width=600,height=400");
  };

  return (
    <div className="popupContainer">
      <div className="popupContent headerStyle">
        <h1>Popup & Alerts</h1>
        <p>
          Pop-ups are small windows that 'pop up' over the top of web pages in your internet browser. Advertisers used them as a way to get
          your attention. Alerts are often used if you want to make sure information comes through to the user. Try to test the pop-up and
          alert functions. Try opening and closing both the pop-up and alert.
        </p>
        <div className="popupButtonsContainer">
          <div className="popupButtonGroup">
            <h2>Pop-Up Testing</h2>
            <p>Trigger the pop-up window to open by clicking the button below. Instruct your test to then close the pop-up window:</p>
            <button className="popupButton" onClick={() => openPopup()}>
              Trigger Popup
            </button>
            <button className="popupButton" onClick={() => openPopup()}>
              Trigger Popup
            </button>
          </div>
          <div className="popupButtonGroup">
            <h2>Alert Testing</h2>
            <p>Press the button below to trigger the alert event. Then try to instruct your automation test to close the alert:</p>
            <button className="popupButton" onClick={() => alert("Alert Button clicked!")}>
              Trigger Alert
            </button>
            <button className="popupButton" onClick={() => alert("Alert dismissed!")} aria-label="Close alert" type="button" data-close>
              Dismiss Alert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAlert;
