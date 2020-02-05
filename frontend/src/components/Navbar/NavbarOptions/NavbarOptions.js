import React, { Component } from "react";

export default class NavbarOptions extends Component {
  render() {
    const { isAdmin } = this.props;

    return (
      <div>
        {isAdmin && <div>Members</div>}
        <div>Created</div>
        {isAdmin && <div>Unassigned</div>}
      </div>
    );
  }
}
