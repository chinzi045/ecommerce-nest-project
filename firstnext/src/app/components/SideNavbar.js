import React from "react";

import Link from "next/link";
import "./sideNav.css";

const SideNav = ({ children }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Admin dashboard</h2>
      <ul className="sideNav_items">
        <li>
          <Link href="/admin/dashboard/categories" className="lii">
            Create Category
          </Link>
        </li>
        <li>
          <Link href="/admin/dashboard/All_categories" className="lii">
            List Of All Categories
          </Link>
        </li>
        <li>
          <Link href="/admin/dashboard/products" className="lii">
            Create Products
          </Link>
        </li>
        <li>
          <Link href="/admin/dashboard/listing" className="lii">
            Products Listing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
