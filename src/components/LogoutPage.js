import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage({ loggedInUser }) {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    navigate("/loginportal");
  }, [navigate]);

  return (
    <div className="flex flex-col items-left p-4">
      <h1 className="text-2xl font-bold">Welcome</h1>
      {loggedInUser && <h2 className="text-lg font-semibold">{loggedInUser}</h2>}
      <p className="text-gray-600">You are now logged in.</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white rounded px-4 py-0 w-fit h-auto hover:bg-red-600 transition"
        aria-label="Logout">
        Logout
      </button>
    </div>
  );
}

export default LogoutPage;
