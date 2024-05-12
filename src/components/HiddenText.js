import React, { useState } from "react";

const HiddenText = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden((prevState) => !prevState);
  };
  return (
    <div>
      <div className="headerStyle">
        <h2>Hidden Elements</h2>
        <h5>
          The hidden attribute is a boolean attribute. When present, it specifies that an element is not yet, or is no longer, relevant.
          Browsers should not display elements that have the hidden attribute specified.
        </h5>
        <h3>Hidden Paragraphs</h3>
        <p>
          There are two paragraphs listed below, one that is visible and one that is hidden. Use the browser inspector to view the hidden
          paragraph:
        </p>
        <p>This is a visible paragraph.</p>
        <p hidden>This is a invisible paragraph.</p>
        <div>
          <button onClick={toggleHidden}>Toggle</button>
          {!isHidden && (
            <div>
              <p>You have displayed the hidden text!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HiddenText;
