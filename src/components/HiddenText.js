import React, { useState } from "react";

const HiddenText = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-center">Hidden Elements</h1>
      <p className="text-gray-600 text-sm mt-2">
        The <code className="bg-gray-200 p-1 rounded">hidden</code> attribute specifies that an element is not yet, or is no longer,
        relevant. Browsers should not display elements with this attribute.
      </p>

      <h2 className="text-lg font-semibold mt-4">Hidden Paragraphs</h2>
      <p className="text-gray-700">There are two paragraphs below. One is visible, and the other is hidden.</p>

      <div className="mt-2 space-y-2">
        <p className="text-green-600 font-medium">This is a visible paragraph.</p>
        <p hidden className="text-red-600 font-medium">
          This is an invisible paragraph.
        </p>
      </div>

      {/* Toggle Button & Hidden Text */}
      <div className="mt-4">
        <button onClick={() => setIsHidden(!isHidden)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          {isHidden ? "Show" : "Hide"} Text
        </button>

        {!isHidden && (
          <div className="mt-2 p-3 bg-gray-100 rounded-md">
            <p className="text-gray-700">You have displayed the hidden text!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HiddenText;
