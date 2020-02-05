import React, { Component } from "react";
import NavbarOptions from "./NavbarOptions/NavbarOptions";
import userIcon from "../../assets/svg/user-icon.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-title">Title</div>
        <NavbarOptions />
        <img src={userIcon} className="navbar-user" />
      </div>
    );
  }
}
