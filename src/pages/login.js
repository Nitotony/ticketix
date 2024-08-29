import React from "react";
import "./login.css"; 

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">Login</h2>
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="login-input"
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="login-input"
          placeholder="Enter your password"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
