import React from "react";

const PopupAlert = () => {
  const openPopup = () => {
    window.open("https://www.google.com/", "Popup Window", "width=600,height=400");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800">Popup & Alerts</h1>
        <p className="text-gray-600 mt-4">
          Pop-ups are small windows that 'pop up' over web pages in your browser. Advertisers use them to get attention. Alerts help ensure
          information reaches users. Try opening and closing both a pop-up and an alert.
        </p>

        {/* Popup Buttons */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Pop-Up Testing</h2>
            <p className="text-gray-600 mt-2">Click the button below to open a pop-up window:</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" onClick={openPopup}>
              Trigger Popup
            </button>
          </div>

          {/* Alert Buttons */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Alert Testing</h2>
            <p className="text-gray-600 mt-2">Click a button to trigger or dismiss an alert:</p>
            <div className="mt-4 flex flex-col gap-3">
              <button
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                onClick={() => alert("Alert Button clicked!")}>
                Trigger Alert
              </button>
              <button
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                onClick={() => alert("Alert dismissed!")}
                aria-label="Close alert">
                Dismiss Alert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAlert;
