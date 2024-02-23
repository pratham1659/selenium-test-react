import React from "react";
import { Routes, Route } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css";
import { Link } from "react-router-dom";
import Home from "./Home";

function MainPage() {
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
              <Link to="/">HOMEPAGE</Link>
            </li>
            <hr />
            <li>
              <Link to="/accordion">ACCORDION</Link>
            </li>
            <hr />
            <li>
              <Link to="/actions">ACTIONS</Link>
            </li>
            <hr />
            <li>
              <Link to="/browsertabs">BROWSER TABS</Link>
            </li>
            <hr />
            <li>
              <Link to="/buttons">BUTTONS</Link>
            </li>
            <hr />
            <li>
              <Link to="#calculator">CALCULATOR (JS)</Link>
            </li>
            <hr />
            <li>
              <Link to="#contactus">CONTACT US FORM TEST</Link>
            </li>
            <hr />
            <li>
              <Link to="#datepicker">DATE PICKER</Link>
            </li>
            <hr />
            <li>
              <Link to="#dropdown">DROPDOWN CHECKBOX RADIO</Link>
            </li>
            <hr />
            <li>
              <Link to="#fileupload">FILE UPLOAD</Link>
            </li>
            <hr />
            <li>
              <Link to="#hiddenelements">HIDDEN ELEMENTS</Link>
            </li>
            <hr />
            <li>
              <Link to="#iframes">IFRAMES</Link>
            </li>
            <hr />
            <li>
              <Link to="#loader">LOADER</Link>
            </li>
            <hr />
            <li>
              <Link to="#loadertwo">LOADER TWO</Link>
            </li>
            <hr />
            <li>
              <Link to="#loginportal">LOGIN PORTAL TEST</Link>
            </li>
            <hr />
            <li>
              <Link to="#mousemovement">MOUSE MOVEMENT</Link>
            </li>
            <hr />
            <li>
              <Link to="#popupsalerts">POP UPS & ALERTS</Link>
            </li>
            <hr />
            <li>
              <Link to="#predictivesearch">PREDICTIVE SEARCH</Link>
            </li>
            <hr />
            <li>
              <Link to="#tables">TABLES</Link>
            </li>
            <hr />
            <li>
              <Link to="#teststore">TEST STORE</Link>
            </li>
            <hr />
            <li>
              <Link to="#aboutme">ABOUT ME</Link>
            </li>
            <hr />
            <li>
              <p className="leftPara">Pratham-Selenium All Rights Reserved</p>
            </li>
          </ul>
        </div>
        <div style={centerBoxStyle}>
          <h2>Center Box</h2>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/buttons"
              element={
                <ButtonComponent
                  onClick={() => showMessage("Button clicked!")}
                  onRadioChange={() => showMessage("Radio button selected!")}
                  onCheckboxChange={() => showMessage("Checkbox selected!")}
                />
              }
            />
          </Routes>
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

export default MainPage;
