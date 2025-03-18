import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function Buttons() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonDisabledCheckBox, setButtonDisabledCheckBox] = useState(true);
  const [showHiddenButton, setShowHiddenButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [doubleClickCount, setDoubleClickCount] = useState(0);

  const toggleMenu = () => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 3000); // Keep dropdown open for 3 seconds
  };

  const handleMouseEnter = () => {
    setHovered(true);
    setTimeout(() => setIsOpen(true), 3000);
  };
  const handleMouseLeave = () => {
    setHovered(false);
    setIsOpen(false);
  };

  const enableButton = () => {
    setButtonDisabled(false);
    toast.success("Button enabled!");
  };

  const handleCheckboxChange = (e) => {
    setButtonDisabledCheckBox(!e.target.checked);
  };

  const handleHiddenButtonChange = (e) => {
    setTimeout(() => setShowHiddenButton(e.target.checked), 3000);
  };

  const handleDoubleClick = () => {
    setDoubleClickCount((prev) => prev + 1);
    if (doubleClickCount >= 1) {
      toast.success("Double Click Found!");
      setDoubleClickCount(0);
    }
  };

  return (
    <div className="p-6 space-y-6 items-center">
      <h2 className="text-2xl text-center font-semibold text-blue-700 mb-4">Testing Buttons</h2>
      <p className="text-center text-gray-600">Attempt to click the buttons using the instructions below.</p>

      <div className="grid grid-cols-2 gap-6">
        {[
          { title: "WebElement.click()", msg: "Button clicked!", color: "bg-blue-600 hover:bg-blue-800 text-white" },
          { title: "JavaScript click", msg: "Button JS clicked!", color: "bg-green-600 hover:bg-green-800 text-white" },
          { title: "Action Move & Click", msg: "Button Action clicked!", color: "bg-red-600 hover:bg-red-800 text-white" },
          { title: "Delayed Dropdown", isDropdown: true, color: "bg-purple-600 hover:bg-purple-800 text-white" },
        ].map(({ title, msg, isDropdown, color }, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{title}</h3>
            {isDropdown ? (
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className={`btn ${color} rounded-lg px-4 py-2`} onClick={toggleMenu}>
                  Dropdown Menu
                </button>
                {isOpen && hovered && (
                  <ul className="absolute mt-2 w-full bg-white shadow-lg rounded-md">
                    {["Link 1", "Link 2", "Link 3"].map((link, idx) => (
                      <li
                        key={idx}
                        className="p-2 hover:bg-gray-300 cursor-pointer"
                        onClick={() => toast.success(`You clicked on ${link}`)}>
                        {link}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <button className={`btn ${color} rounded-lg px-4 py-2`} onClick={() => toast.success(msg)}>
                Click Me
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {[
          { title: "Disabled Button", disabled: buttonDisabled, onClick: enableButton, color: "bg-gray-500 text-white" },
          { title: "Double Click Button", onClick: handleDoubleClick, color: "bg-yellow-600 hover:bg-yellow-800 text-white" },
          {
            title: "Checkbox Enable Button",
            checkbox: true,
            disabled: buttonDisabledCheckBox,
            onClick: () => toast.success("Button Clicked!"),
            color: "bg-pink-600 hover:bg-pink-800 text-white",
          },
          {
            title: "Hidden Button",
            hidden: !showHiddenButton,
            checkboxHidden: true,
            onClick: () => toast.success("Hidden Button Click Found!"),
            color: "bg-indigo-600 hover:bg-indigo-800 text-white",
          },
        ].map(({ title, onClick, disabled, checkbox, hidden, checkboxHidden, color }, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{title}</h3>
            {checkbox && (
              <div className="mt-2">
                <input type="checkbox" onChange={handleCheckboxChange} /> Enable Button
              </div>
            )}
            {checkboxHidden && (
              <div className="mt-2">
                <input type="checkbox" onChange={handleHiddenButtonChange} /> Show Hidden Button
              </div>
            )}
            <button
              className={`btn mt-2 ${color} rounded-lg px-4 py-2 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={disabled}
              onClick={onClick}
              hidden={hidden}>
              {title}
            </button>
          </div>
        ))}
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default Buttons;
