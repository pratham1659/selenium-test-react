import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
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
      toast.success("Login successful!");
    } else {
      toast.error("Please enter both username and password.");
    }
  };

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
        <button type="submit">Login</button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default LoginForm;
