import React, { Component } from "react";
import NavbarOptions from "./NavbarOptions/NavbarOptions";
import userIcon from "../../assets/svg/user-icon.svg";

import "./css/navbar.css";

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

  renderTitle() {
    if (this.state.page.includes("projects")) {
      return (
        <div className="navbar__title navbar__title--centered">Projects</div>
      );
    } else {
      return (
        <div className="navbar__title navbar__title--left-aligned">
          SelectedProject
        </div>
      );
    }
  }

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
        <img src={userIcon} className="navbar__user" alt="user" />
      </div>
    );
  }
}
