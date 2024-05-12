import React, { useState } from "react";
import "./styles.css";
import { Toaster, toast } from "react-hot-toast";

const MouseMove = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive((prevState) => !prevState);
  };

  const handleClick = (link) => {
    toast.success(`You clicked on ${link}`);
  };
  return (
    <div className="headerStyle">
      <h1>MouseMovement Test</h1>
      <p>Here You can Test Your MouseMovement with this Navbar</p>
      <div className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
        <a href="#home" onClick={() => handleClick("Home Section")} className="active">
          Home
        </a>
        <div className="dropdown">
          <button className="dropbtn">News</button>
          <div className="dropdown-content">
            <a href="#Link1" onClick={() => handleClick("Politics News")}>
              Politics
            </a>
            <a href="#Link2" onClick={() => handleClick("Technology news")}>
              Technology
            </a>
            <a href="#Link3" onClick={() => handleClick("Finance news")}>
              Finance
            </a>
          </div>
        </div>
        <a href="#contact" onClick={() => handleClick("Contact Section")}>
          Contact
        </a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#Link1" onClick={() => handleClick("Link 1")}>
              Link 1
            </a>
            <a href="#Link2" onClick={() => handleClick("Link 2")}>
              Link 2
            </a>
            <a href="#Link3" onClick={() => handleClick("Link 3")}>
              Link 3
            </a>
          </div>
        </div>
        <a href="#about">About</a>
        <button className="icon" onClick={toggleResponsive}>
          &#9776;
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MouseMove;
