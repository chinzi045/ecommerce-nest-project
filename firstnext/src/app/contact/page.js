import React from "react";
import "./contact.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const page = () => {
  return (
    <div className="contact_main">
      <div className="contact_1">
        <div className="conact_div">
          <h3 className="icon_set">
            <PiPhoneCallFill style={{ color: "red", fontSize: "32px" }} />
            <span>Call To Us</span>
          </h3>
          <p>We are available 24/7,& days of week</p>
          <p>Phone : +8809911223347</p>
        </div>
        <div className="contact_div">
          <h3 className="icon_set">
            <MdEmail style={{ color: "red", fontSize: "32px" }} />
            <span>Write To Us</span>
          </h3>
          <p>Find out our form we will contact you within 24 hours</p>
          <p>gigalabs@gmail.com</p>
          <p>Techonvecant@gmail.com</p>
        </div>
      </div>
      <div className="contact_2">
        <div className="input_div">
          <input
            type="text"
            placeholder="Your Name *"
            className="contact_input"
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="contact_input"
          />
          <input
            type="text"
            placeholder="Your Phone *"
            className="contact_input"
          />
        </div>
        <div>
          <textarea
            rows={7}
            placeholder="Your Message"
            className="textarea_contact"
          />
        </div>
        <div>
          <button className="contact_btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default page;
