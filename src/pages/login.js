import React from "react";
import "./login.css";

import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div >
      <Navbar />
      <div className="login">
        <div className="login_container">
          <div className="login_title">
            <h3>login</h3>
          </div>
          <div className="login_form">
            <form action="">
              <input type="text" placeholder="email" />
              <input type="password" placeholder="password" />
              <button type="submit">login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
