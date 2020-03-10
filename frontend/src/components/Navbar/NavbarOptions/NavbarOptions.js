import React, { Component } from "react";

import "./css/navbar-options.css";

export default class NavbarOptions extends Component {
  render() {
    const { isAdmin } = this.props;

    return (
      <div className="navbar-options">
        {isAdmin && <div className="navbar-link navbar-options__members">Members</div>}
        <div className="navbar-link navbar-options__created">Created</div>
        {isAdmin && (
          <div className="navbar-link navbar-options__unassigned">Unassigned</div>
        )}
      </div>
    );
  }
}
