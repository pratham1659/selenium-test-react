import React from "react";
import "./styles.css";

const Frame = () => {
  return (
    <div className="iframe-container">
      <div className="headerStyle">
        <h2>Selenium iFrame Playground</h2>
        <p>This is iFrame to interact with Selenium</p>
      </div>

      <iframe className="frame-iframe" src="https://selenium-test-react.vercel.app/browsertabs" title="selenium-playground"></iframe>
    </div>
  );
};

export default Frame;
