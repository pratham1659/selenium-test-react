import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage({ loggedInUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/loginportal");
  };

  return (
    <section className="max-w-md mx-auto p-6 space-y-4 bg-white rounded-lg shadow-md">
      <header className="space-y-2 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Account Overview</h1>
        {loggedInUser && (
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-700">
              Welcome, <span className="text-blue-600">{loggedInUser}</span>
            </span>
          </div>
        )}
      </header>

      <div className="space-y-4">
        <p className="text-gray-600">{loggedInUser ? "You are currently logged into your account." : "No active session found."}</p>

        {loggedInUser && (
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md 
                     transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 
                     focus:ring-offset-2 active:bg-red-700 disabled:opacity-50"
            aria-label="Sign out of current account"
            disabled={!loggedInUser}>
            Sign Out
          </button>
        )}
      </div>

      {!loggedInUser && <p className="text-sm text-gray-500 text-center">Please log in to access your account.</p>}
    </section>
  );
}

export default LogoutPage;
