import React, { Component } from "react";
import NavbarOptions from "./NavbarOptions/NavbarOptions";
import userIcon from "../../assets/svg/user-icon.svg";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { page: this.props.location.pathname };
  }

  componentDidMount() {
    this.props.history.listen(location => {
      if (this.state.page !== location.pathname) {
        this.setState({ page: location.pathname });
      }
    });
  }

  render() {
    return (
      <div className="navbar">
        <div
          className={`navbar-title ${
            this.state.page.includes("projects") ? "centered" : "left-aligned"
          }`}
        >
          Title
        </div>
        {!this.state.page.includes("projects") && (
          <NavbarOptions isAdmin={true} />
        )}
        <img src={userIcon} className="navbar-user" />
      </div>
    );
  }
}
