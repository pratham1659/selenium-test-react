import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { fields } from "../api/data";

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Checkbox 1", checked: false },
    { id: 2, label: "Checkbox 2", checked: false },
    { id: 3, label: "Checkbox 3", checked: false },
  ]);
  const [dropSelected, setDropSelected] = useState("");
  const [activeField, setActiveField] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedDemoItem, setSelectedDemoItem] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    toast.success(`Selected: ${event.target.value}`);
  };

  const handleDropOptionChange = (event) => {
    setDropSelected(event.target.value);
    toast.success(`Dropdown: ${event.target.value}`);
  };

  const handleCheckboxChange = (id) => {
    setCheckboxes((prev) => prev.map((checkbox) => (checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox)));
  };

  const handleFieldHover = (field) => {
    setActiveField(field);
    setShowSubMenu(true);
  };

  const handleFieldLeave = () => {
    setShowSubMenu(false);
  };

  const handleSubMenuClick = (subItem) => {
    setActiveField(subItem);
    setShowSubMenu(false);
    toast.success(`Selected: ${subItem}`);
  };

  const handleDemoItemClick = (item) => {
    setSelectedDemoItem(item);
    toast.success(`Picked: ${item}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Dropdowns, Radios & Checkboxes</h1>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Radio Buttons */}
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-lg">Radio Buttons</h2>
          <p className="mb-2">Select an Option:</p>
          {["Option 1", "Option 2", "Option 3"].map((option, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value={option.toLowerCase()}
                checked={selectedOption === option.toLowerCase()}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Checkboxes */}
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-lg">Checkboxes</h2>
          <p className="mb-2">Select checkboxes:</p>
          {checkboxes.map(({ id, label, checked }) => (
            <label key={id} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={checked} onChange={() => handleCheckboxChange(id)} />
              {label}
            </label>
          ))}
        </div>

        {/* Dropdown Menu */}
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-lg">Dropdown</h2>
          <p className="mb-2">Choose an option:</p>
          <select className="border p-2 w-full" value={dropSelected} onChange={handleDropOptionChange}>
            <option value="">Select</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={`option ${num}`}>
                Option {num}
              </option>
            ))}
          </select>
          {dropSelected && <p className="mt-2">Selected: {dropSelected}</p>}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-6">
        {/* Navigation Menu */}
        <div className="border p-4 rounded-lg shadow-md relative">
          <h2 className="font-semibold text-lg">Navigation Menu</h2>
          <input type="text" className="border p-2 w-full mt-2" readOnly value={activeField} />

          <ul className="mt-2">
            {fields.map((field, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 p-2 cursor-pointer relative"
                onMouseEnter={() => handleFieldHover(field.name)}
                onMouseLeave={handleFieldLeave}>
                {field.name}
                {/* Sub-menu */}
                {showSubMenu && activeField === field.name && (
                  <ul className="absolute left-full top-0 bg-gray-100 p-2 rounded shadow-lg">
                    {field.subMenu.map((item, subIndex) => (
                      <li key={subIndex} className="hover:text-blue-500 cursor-pointer p-2" onClick={() => handleSubMenuClick(item)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Scrollable Demo Box */}
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-lg">Scrollable Demo Box</h2>
          <div className="border rounded-md h-40 overflow-y-auto p-2 mt-2">
            <ul>
              {Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`).map((item, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer ${selectedDemoItem === item ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                  onClick={() => handleDemoItemClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {selectedDemoItem && <p className="mt-2">Picked: {selectedDemoItem}</p>}
        </div>

        {/* Empty Placeholder (Optional) */}
        <div className="border p-4 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-gray-400">Empty Slot</p>
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default DropDown;
