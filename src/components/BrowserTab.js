import React from "react";

const BrowserTab = () => {
  const openNewTab = () => {
    window.open("https://www.google.com/", "_blank");
  };
  return (
    <div className="headerStyle">
      <h2>Browser Tabs</h2>
      <p>
        Sometimes we need to test webpages that reside in a different tab. Use this page to click the button below, which will open a
        webpage in a new tab. Then try to get your Selenium test to switch to the new tab to perform an action on the new webpage. Then, get
        Selenium to switch back to the original tab.
      </p>
      <h3>Open a new tab using the button below</h3>
      <p>This button will open Google.com in a new tab.</p>
      <button onClick={openNewTab}>Open New Tab</button>
    </div>
  );
};

export default BrowserTab;
