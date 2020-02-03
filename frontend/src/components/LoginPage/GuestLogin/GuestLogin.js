import React, { Component } from "react";

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
        <form className="guest-login-container" onSubmit={this.handleSubmit}>
          <input
            className="guest-name-input"
            type="text"
            value={this.state.value}
            placeholder="...Type your guest name here"
            onChange={this.handleChange}
          />
          <input
            className="guest-login-button"
            type="submit"
            value="Log In as Guest"
          />
        </form>
      );
    } else {
      return (
        <div className="guest-login-container">
          <h2 className="guest-name">Hi, {userDetails.userGivenName}</h2>
          <button className="guest-login-button">Go to Projects</button>
        </div>
      );
    }
  }
}
