import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css";

function LoginForm({ setLoggedInUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
    loggedInUser: null,
    redirectToLogout: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      if (formData.rememberMe) {
        setLoggedInUser(formData.username);
        setFormData((prevState) => ({
          ...prevState,
          loggedInUser: formData.username,
          redirectToLogout: true,
        }));
        toast.success("Login successful!");
      }
    } else {
      toast.error("Please enter both username and password.");
    }
  };

  if (formData.redirectToLogout) {
    return <Navigate to="/logout" />;
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <label>
          <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
          Remember me
        </label>
        <button type="submit" disabled={!formData.username || !formData.password}>
          Login
        </button>
      </form>
      {formData.loggedInUser && <p>Logged in as: {formData.loggedInUser}</p>}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default LoginForm;
