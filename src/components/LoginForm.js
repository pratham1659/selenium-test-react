import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

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
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
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
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Login</h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Username Input */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Remember Me Checkbox */}
          <label className="flex items-center space-x-2 text-gray-600">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-blue-500 focus:ring-blue-400"
            />
            <span>Remember me</span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.username || !formData.password}
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 transition duration-300">
            Login
          </button>
        </form>

        {/* Logged-in User Display */}
        {formData.loggedInUser && <p className="mt-4 text-center text-green-600">Logged in as: {formData.loggedInUser}</p>}

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
}

export default LoginForm;
