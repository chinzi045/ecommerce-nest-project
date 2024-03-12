import React from "react";
import "./footer.css";
import { IoSendOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="main_footer">
      <div className="footer">
        <div className="foote">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% of your first Order</p>
          <div className="email_div">
            <div>
              <input
                type="email"
                placeholder="enter your email"
                className="email_footer"
              />
            </div>
            <div>
              <button className="send_icon">
                <IoSendOutline />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3>Support</h3>
          <p>johar town Lahore,Gigalabs pakistan </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-8888-9097</p>
        </div>
        <div>
          <h3>Account</h3>
          <p>My Account</p>
          <p>login/Register</p>
          <p>Cart</p>
          <p>Whilist</p>
          <p>Shop</p>
        </div>
        <div>
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="reserved">
        <p>© Copyright Inzamam . All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
