import React from "react";
import "./signup.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="main_signup">
      <img src="./sideimg.png" alt="side img" className="signup_img" />
      <div>
        <form className="signup_form">
          <div>
            <h1>Create an Account</h1>
            <p>Enter Your details below</p>
          </div>
          <div>
            <input type="text" placeholder="Name" className="signup_input" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="signup_input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              className="signup_input"
            />
          </div>
          <button className="signup_btn">Create Account</button>
          <Link href="/login" className="signup_link">
            <p>Already Have an Account? Login</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default page;
