import React, { Component } from "react";
import NavbarOptions from "./NavbarOptions/NavbarOptions";
import userIcon from "../../assets/svg/user-icon.svg";
import { UserDropdown } from "./UserDropdown/UserDropdown";

import "./css/navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.location.pathname,
      dropdownVisible: false
    };
  }

  componentDidMount() {
    this.props.history.listen(location => {
      this.setState({ dropdownVisible: false });

      if (this.state.page !== location.pathname) {
        this.setState({ page: location.pathname });
      }
    });
  }

  toggleDropdown = () => {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  };

  renderTitle = () => {
    if (this.state.page.includes("projects")) {
      return (
        <div className="navbar__title navbar__title--centered">Projects</div>
      );
    } else {
      return (
        <div
          onClick={() =>
            this.props.history.push(`/project/${this.props.projectId}`)
          }
          className="navbar__title navbar__title--left-aligned"
        >
          {this.props.projectName}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className={`navbar navbar--${
          this.state.page === "/" ? "hidden" : "visible"
        }`}
      >
        {this.renderTitle()}
        {!this.state.page.includes("projects") && (
          <NavbarOptions isAdmin={true} />
        )}
        <img
          src={userIcon}
          onClick={this.toggleDropdown}
          className={`navbar__user navbar__user--${
            this.state.dropdownVisible ? "active" : ""
          }`}
          alt="user"
        />
        <UserDropdown visible={this.state.dropdownVisible} />
      </div>
    );
  }
}
