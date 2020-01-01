import React, { Component } from "react";
import Logo from "./Logo";
import GuestLogin from "./GuestLogin";
import GoogleAuth from "./GoogleAuth";
import "./css/login-page.css";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <Logo />
        <GuestLogin />
        <p>or</p>
        <GoogleAuth />
      </div>
    );
  }
}
