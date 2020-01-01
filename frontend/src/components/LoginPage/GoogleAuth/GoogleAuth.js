import React, { Component } from "react";
import gLogo from "../../../assets/svg/g-logo.svg";

export default class GoogleAuth extends Component {
  componentDidMount() {
    const { fetchAuth } = this.props;
    fetchAuth();
  }

  render() {
    return (
      <button className="google-button">
        <img src={gLogo} alt="google-logo" />
        Sign In with Google
        <span></span>
      </button>
    );
  }
}
