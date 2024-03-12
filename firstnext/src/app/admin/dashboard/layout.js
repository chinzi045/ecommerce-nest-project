import SideNav from "@/app/components/SideNavbar";
import React from "react";
import "./dashboard.css";

const layout = ({ children }) => {
  return (
    <div className="main_dashboard">
      <div className="sideNav">
        <SideNav />
      </div>
      <div className="dynamic_content">{children}</div>
    </div>
  );
};

export default layout;
