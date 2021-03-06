import React, { Component } from "react";
import gLogo from "../../../assets/svg/g-logo.svg";

import "./css/google-auth.css";

export default class GoogleAuth extends Component {
  componentDidMount() {
    this.props.performClientInit();
  }

  render() {
    const { userDetails, signOut } = this.props;

    if (!userDetails.isSignedIn) {
      return (
        <button onClick={this.props.signIn} className="google-button">
          <img src={gLogo} alt="google-button__logo" />
          Sign In with Google
          <span></span>
        </button>
      );
    } else if (userDetails.isSignedIn && userDetails.isSignedIn === true) {
      return (
        <button
          onClick={signOut}
          className="google-button google-button--sign-out"
        >
          Sign Out
          <span></span>
        </button>
      );
    }
  }
}
