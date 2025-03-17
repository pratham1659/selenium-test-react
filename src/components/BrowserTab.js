import React from "react";

const BrowserTab = () => {
  const openNewTab = () => {
    window.open("https://www.google.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100 text-center" id="btndiv">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Browser Tabs</h2>
      <p className="text-gray-700 max-w-xl mb-4">
        Sometimes we need to test webpages that reside in a different tab. Use this page to click the button below, which will open a
        webpage in a new tab. Then try to get your Selenium test to switch to the new tab to perform an action on the new webpage. Then, get
        Selenium to switch back to the original tab.
      </p>
      <h3 className="text-lg font-medium text-gray-800 mb-2">Open a new tab using the button below</h3>
      <p className="text-gray-600 mb-4">This button will open Google.com in a new tab.</p>
      <button
        onClick={openNewTab}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        id="newtab"
        name="opentab"
        aria-label="Open a new tab to Google">
        Open New Tab
      </button>
    </div>
  );
};

export default BrowserTab;
