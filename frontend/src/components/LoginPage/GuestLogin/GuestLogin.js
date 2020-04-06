import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./css/guest-login.css";

export default class GuestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    //creating guest name
    let guestName =
      this.state.value !== ""
        ? this.state.value
        : `Guest${Math.floor(Math.random() * 9000 + 1000)}`;

    let newUser = {
      userName: guestName
    };

    //creating user in db and loading user details in redux
    axios.post("api/users", newUser).then(res => {
      this.props.loadUserDetails({ ...res.data, isSignedIn: true });
    });
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
          <h2 className="guest-login__name">Hi, {userDetails.userName}</h2>
          <Link to="/projects" className="guest-login__button">
            Go to Projects
          </Link>
        </div>
      );
    }
  }
}
