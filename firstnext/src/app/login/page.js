import React from "react";
import "./login.css";

const page = () => {
  return (
    <div className="main_login">
      <div>
        <img src="./sideimg.png" alt="side_image" className="login_img" />
      </div>
      <div>
        <form className="login_form">
          <div>
            <h1>Login To Exclusive</h1>
            <p>Enter Your Details Below</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="login_input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Passord"
              className="login_input"
            />
          </div>
          <div className="login_buttons">
            <button className="login_btn">Login </button>
            <button className="login_forgot">Forget Passord</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
