import React from "react";
import { Link } from "react-router-dom";

import "./css/user-dropdown.css";

export const UserDropdown = ({ visible }) => {
  return (
    <div
      className={`user-dropdown user-dropdown--${
        visible ? "visible" : "hidden"
      }`}
    >
      <Link to="/" className="user-dropdown__login">
        Login Page
      </Link>
      <Link to="/projects" className="user-dropdown__projects">
        Projects Page
      </Link>
    </div>
  );
};
