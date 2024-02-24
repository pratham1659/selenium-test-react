import React, { useState } from "react";
import "./styles.css"; // Import CSS file for styling

const MouseMove = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  return (
    <div className="headerStyle">
      <h1>MouseMovement Test</h1>
      <p>Here You can Test Your MouseMovement with this Navbar</p>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className={`navbar-item dropdown ${activeDropdown === 1 ? "active" : ""}`} onClick={() => handleDropdownToggle(1)}>
            <span className="dropdown-btn">Topics</span>
            <ul className={`dropdown-menu ${activeDropdown === 1 ? "show" : ""}`}>
              <li className="dropdown-item">Politics</li>
              <li className="dropdown-item">Technical</li>
              <li className="dropdown-item">Literature</li>
              <li className="dropdown-item">Science</li>
              <li className="dropdown-item">Art</li>
              <li className="dropdown-item">History</li>
            </ul>
          </li>
          <li className={`navbar-item dropdown ${activeDropdown === 2 ? "active" : ""}`} onClick={() => handleDropdownToggle(2)}>
            <span className="dropdown-btn">Services</span>
            <ul className={`dropdown-menu ${activeDropdown === 2 ? "show" : ""}`}>
              <li className="dropdown-item">Testing</li>
              <li className="dropdown-item">Software Development</li>
              <li className="dropdown-item">Cloud Computing</li>
              <li className="dropdown-item">Cybersecurity</li>
            </ul>
          </li>
          <li className={`navbar-item dropdown ${activeDropdown === 3 ? "active" : ""}`} onClick={() => handleDropdownToggle(3)}>
            <span className="dropdown-btn">Resources</span>
            <ul className={`dropdown-menu ${activeDropdown === 3 ? "show" : ""}`}>
              <li className="dropdown-item">Tutorial Websites</li>
              <li className="dropdown-item">Online Courses</li>
              <li className="dropdown-item">Documentation</li>
            </ul>
          </li>
          <li className="navbar-item">About</li>
        </ul>
      </nav>
    </div>
  );
};

export default MouseMove;
