import React from "react";
import { Routes, Route } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css";
import { Link } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

function HomePage() {
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
              <Link to="/actions-tab">ACTIONS</Link>
            </li>
            <hr />
            <li>
              <Link to="/buttons">BUTTONS</Link>
            </li>
            <hr />
          </ul>
        </div>
        <div style={centerBoxStyle}>
          <h2>Center Box</h2>
          <Routes>
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

export default HomePage;
