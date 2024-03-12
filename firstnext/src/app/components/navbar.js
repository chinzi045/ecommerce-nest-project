"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import { IoIosContact } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
  const openNav = () => {
    document.getElementById("ul").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("ul").style.width = "0px";
  };

  return (
    <div className="navbar">
      <div>
        <h3>Exclusive</h3>
      </div>
      <div>
        <ul className="ul" id="ul" onClick={closeNav}>
          <ImCancelCircle className="cancel" id="cancel" />

          <li>
            <Link href="/" className="ul_Link">
              Home
            </Link>
          </li>

          <li>
            <Link href="/contact" className="ul_Link">
              Contact
            </Link>
          </li>

          <li>
            <Link href="/about" className="ul_Link">
              About
            </Link>
          </li>

          <li>
            <Link href="/signup" className="ul_Link">
              Signup
            </Link>
          </li>

          <li>
            <Link href="/admin/dashboard" className="ul_Link">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
      <div className="icons_div">
        <div className="input_div">
          <div>
            <input
              type="text"
              placeholder="what are you looking for?"
              className="input"
            />
          </div>
          <div>
            <button className="search">
              <CiSearch style={{ fontSize: "22px" }} />
            </button>
          </div>
        </div>
        <div className="icons">
          <Link href="/whilist" className="ul_Link1">
            <CiHeart style={{ fontSize: "22px", color: "red" }} />
          </Link>
          <Link href="/cart" className="ul_Link1">
            <CiShoppingCart style={{ fontSize: "22px" }} />
          </Link>
          <Link href="/user" className="ul_Link1">
            <IoIosContact style={{ fontSize: "22px", color: "red" }} />
          </Link>
        </div>
      </div>
      <div className="hamberger">
        <IoMdMenu onClick={openNav} />
      </div>
    </div>
  );
};

export default Navbar;
