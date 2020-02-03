import React, { Component } from "react";
import { signOut } from "../../store/state/userDetails/actions";
import { connect } from "react-redux";
import Logo from "./Logo";
import GuestLogin from "./GuestLogin";
import GoogleAuth from "./GoogleAuth";
import "./css/login-page.css";

export class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <Logo />
        <GuestLogin />
        <p>or</p>
        <GoogleAuth />
        <button onClick={this.props.signOut}>Sign out</button>
      </div>
    );
  }
}

export default connect(null, { signOut })(LoginPage);
