import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth";

import "./css/login-page.css";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <GoogleAuth />
      </div>
    );
  }
}
