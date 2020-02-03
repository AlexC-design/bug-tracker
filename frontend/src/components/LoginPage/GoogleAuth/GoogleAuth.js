import React, { Component } from "react";
import gLogo from "../../../assets/svg/g-logo.svg";

import "./css/google-auth.css";

export default class GoogleAuth extends Component {
  componentDidMount() {}

  render() {
    const { fetchAuth } = this.props;

    return (
      <button onClick={fetchAuth} className="google-button">
        <img src={gLogo} alt="google-logo" />
        Sign In with Google
        <span></span>
      </button>
    );
  }
}
