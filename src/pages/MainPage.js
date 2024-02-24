import React from "react";
import { Routes, Route } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import Calculator from "../components/Calculator";
import Accordion from "../components/Accordian";
import PopupAlert from "../components/PopupAlert";
import FileUpload from "../components/FileUpload";
import DragAction from "../components/DragAction";
import BrowserTab from "../components/BrowserTab";

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
              <Link to="/calculator">CALCULATOR</Link>
            </li>
            <hr />
            <li>
              <Link to="/contactus">CONTACT US FORM TEST</Link>
            </li>
            <hr />
            <li>
              <Link to="/datepicker">DATE PICKER</Link>
            </li>
            <hr />
            <li>
              <Link to="/dropdown">DROPDOWN CHECKBOX RADIO</Link>
            </li>
            <hr />
            <li>
              <Link to="/fileupload">FILE UPLOAD</Link>
            </li>
            <hr />
            <li>
              <Link to="/hiddenelements">HIDDEN ELEMENTS</Link>
            </li>
            <hr />
            <li>
              <Link to="/iframes">IFRAMES</Link>
            </li>
            <hr />
            <li>
              <Link to="/loader">LOADER</Link>
            </li>
            <hr />
            <li>
              <Link to="/loadertwo">LOADER TWO</Link>
            </li>
            <hr />
            <li>
              <Link to="/loginportal">LOGIN PORTAL TEST</Link>
            </li>
            <hr />
            <li>
              <Link to="/mousemovement">MOUSE MOVEMENT</Link>
            </li>
            <hr />
            <li>
              <Link to="/popupalerts">POP UPS & ALERTS</Link>
            </li>
            <hr />
            <li>
              <Link to="/predictivesearch">PREDICTIVE SEARCH</Link>
            </li>
            <hr />
            <li>
              <Link to="/tables">TABLES</Link>
            </li>
            <hr />
            <li>
              <Link to="/teststore">TEST STORE</Link>
            </li>
            <hr />
            <li>
              <Link to="/aboutme">ABOUT ME</Link>
            </li>
            <hr />
            <li>
              <p className="leftPara">Pratham-Selenium All Rights Reserved</p>
            </li>
          </ul>
        </div>
        <div style={centerBoxStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/actions" element={<DragAction />} />
            <Route path="/browsertabs" element={<BrowserTab />} />
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
            <Route path="/fileupload" element={<FileUpload />} />
            <Route path="/popupalerts" element={<PopupAlert />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/calculator" element={<Calculator />} />
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
  border: "2px solid #f56a6a",
  padding: "20px",
  marginLeft: "20px",
  width: "200px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
};

const centerBoxStyle = {
  border: "2px solid #f56a6a",
  padding: "10px",
  flex: "1",
  marginLeft: "20px",
  marginRight: "20px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
};

export default MainPage;
