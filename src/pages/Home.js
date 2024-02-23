import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css";
import { Link } from "react-router-dom";

function Home() {
  const showMessage = (message) => {
    toast.success(message);
  };

  return (
    <div className="App">
      <h1 className="header">Automation Testing Site</h1>
      <div style={pageContainerStyle}>
        <div style={leftBoxStyle} className="leftBoxStyle">
          <h2>Navigation Menu</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="#homepage">HOMEPAGE</Link>
            </li>
            <hr />
            <li>
              <a href="#accordion">ACCORDION</a>
            </li>
            <hr />
            <li>
              <a href="#actions">ACTIONS</a>
            </li>
            <hr />
            <li>
              <a href="#browsertabs">BROWSER TABS</a>
            </li>
            <hr />
            <li>
              <a href="#buttons">BUTTONS</a>
            </li>
            <hr />
            <li>
              <a href="#calculator">CALCULATOR (JS)</a>
            </li>
            <hr />
            <li>
              <a href="#contactus">CONTACT US FORM TEST</a>
            </li>
            <hr />
            <li>
              <a href="#datepicker">DATE PICKER</a>
            </li>
            <hr />
            <li>
              <a href="#dropdown">DROPDOWN CHECKBOX RADIO</a>
            </li>
            <hr />
            <li>
              <a href="#fileupload">FILE UPLOAD</a>
            </li>
            <hr />
            <li>
              <a href="#hiddenelements">HIDDEN ELEMENTS</a>
            </li>
            <hr />
            <li>
              <a href="#iframes">IFRAMES</a>
            </li>
            <hr />
            <li>
              <a href="#loader">LOADER</a>
            </li>
            <hr />
            <li>
              <a href="#loadertwo">LOADER TWO</a>
            </li>
            <hr />
            <li>
              <a href="#loginportal">LOGIN PORTAL TEST</a>
            </li>
            <hr />
            <li>
              <a href="#mousemovement">MOUSE MOVEMENT</a>
            </li>
            <hr />
            <li>
              <a href="#popupsalerts">POP UPS & ALERTS</a>
            </li>
            <hr />
            <li>
              <a href="#predictivesearch">PREDICTIVE SEARCH</a>
            </li>
            <hr />
            <li>
              <a href="#tables">TABLES</a>
            </li>
            <hr />
            <li>
              <a href="#teststore">TEST STORE</a>
            </li>
            <hr />
            <li>
              <a href="#aboutme">ABOUT ME</a>
            </li>
            <hr />
            <li>
              <p className="leftPara">Pratham-Selenium All Rights Reserved</p>
            </li>
          </ul>
        </div>
        <div style={centerBoxStyle}>
          <h2>Center Box</h2>
          <ButtonComponent
            onClick={() => showMessage("Button clicked!")}
            onRadioChange={() => showMessage("Radio button selected!")}
            onCheckboxChange={() => showMessage("Checkbox selected!")}
          />
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

const pageContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginTop: "20px",
};

const leftBoxStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  marginLeft: "20px",
  width: "200px",
};

const centerBoxStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  flex: "1",
  marginLeft: "20px",
  marginRight: "20px",
};

export default Home;
