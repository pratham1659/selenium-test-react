import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage({ loggedInUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/loginportal");
  };

  return (
    <div>
      <h1>Welcome, {loggedInUser}!</h1>
      <p>You are now logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutPage;
