/* eslint-disable no-undef */
import { useState } from "react";

const PopupAlert = () => {
  const [message, setMessage] = useState("");

  const openPopup = () => {
    window.open("https://www.google.com/", "Popup Window", "width=600,height=400");
    setMessage("A pop-up window was opened.");
  };

  const handleSignIn = () => {
    // Ask for username
    const username = prompt("Enter your username:");

    if (!username) {
      alert("❌ Username is required!");
      return;
    }

    // Ask for password
    const password = prompt("Enter your password:");

    if (!password) {
      alert("❌ Password is required!");
      return;
    }

    // Successful login alert
    alert(`✅ Welcome, ${username}! You have successfully signed in.`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800">Popup & Alerts</h1>
        <p className="text-gray-600 mt-4">Pop-ups, alerts, and authentication messages help users interact with the application.</p>

        {/* Popup and Alert Buttons */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* Pop-Up Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Pop-Up Testing</h2>
            <p className="text-gray-600 mt-2">Click the button to open a pop-up window:</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" onClick={openPopup}>
              Trigger Popup
            </button>
          </div>

          {/* Alert Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">Alert Testing</h2>
            <p className="text-gray-600 mt-2">Click a button to trigger different alerts:</p>
            <div className="mt-4 flex flex-col gap-3">
              {/* Simple Alert */}
              <button
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => {
                  alert("This is a simple alert!");
                  setMessage("A simple alert was triggered.");
                }}>
                Show Alert
              </button>

              {/* Confirmation Alert */}
              <button
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                onClick={() => {
                  // eslint-disable-next-line no-restricted-globals
                  const userConfirmed = confirm("Are you sure you want to proceed?");
                  setMessage(userConfirmed ? "User clicked OK" : "User clicked Cancel");
                }}>
                Show Confirm Alert
              </button>

              {/* Prompt Alert */}
              <button
                className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
                onClick={() => {
                  const userInput = prompt("Enter your name:");
                  if (userInput) {
                    alert(`Hello, ${userInput}!`); // Use backticks (`) instead of double quotes
                  } else {
                    alert("No name entered.");
                  }
                }}>
                Show Prompt Alert
              </button>

              {/* Authentication Alert */}
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition" onClick={handleSignIn}>
                Try Authentication
              </button>
            </div>
          </div>
        </div>

        {/* Display Message */}
        {message && <p className={`mt-4 text-sm font-semibold ${isAuthenticated ? "text-green-600" : "text-red-600"}`}>{message}</p>}
      </div>
    </div>
  );
};

export default PopupAlert;
