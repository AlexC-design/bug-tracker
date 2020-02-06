import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./css/guest-login.css";

export default class GuestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { userDetails } = this.props;

    if (!userDetails.isSignedIn) {
      return (
        <form className="guest-login" onSubmit={this.handleSubmit}>
          <input
            className="guest-login__input"
            type="text"
            value={this.state.value}
            placeholder="...Type your guest name here"
            onChange={this.handleChange}
          />
          <input
            className="guest-login__button"
            type="submit"
            value="Log In as Guest"
          />
        </form>
      );
    } else {
      return (
        <div className="guest-login">
          <h2 className="guest-login__name">Hi, {userDetails.userGivenName}</h2>
          <Link to="/projects" className="guest-login__button">
            Go to Projects
          </Link>
        </div>
      );
    }
  }
}
