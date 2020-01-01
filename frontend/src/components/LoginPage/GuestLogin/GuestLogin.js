import React, { Component } from "react";

export default class GuestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
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
  }
}
