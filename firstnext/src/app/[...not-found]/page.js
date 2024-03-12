"use client";
import React from "react";
import "./notfound.css";

import Link from "next/link";

const page = () => {
  return (
    <div className="main_notfound">
      <h1 className="main_notfound_h1">404 Not Found</h1>
      <p>Your visited page is not found.You may ho home page</p>
      <button className="main_notfound_button">
        <Link href="/" className="link">
          Back to home Page
        </Link>
      </button>
    </div>
  );
};

export default page;
