import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./css/navbar-options.css";

const NavbarOptions = ({ history, isAdmin, projectId }) => {
  const switchPage = page => {
    history.replace(`/project/${projectId}/${page}`);
  };

  return (
    <div className="navbar-options">
      {isAdmin && (
        <div
          onClick={() => switchPage("members")}
          className="navbar-link navbar-options__members"
        >
          Members
        </div>
      )}
      <div
        onClick={() => switchPage("created")}
        className="navbar-link navbar-options__created"
      >
        Created
      </div>
      {isAdmin && (
        <div
          onClick={() => switchPage("unassigned")}
          className="navbar-link navbar-options__unassigned"
        >
          Unassigned
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  projectId: state.selectedProject._id
});

const wrappedComponent = withRouter(NavbarOptions);

export default connect(mapStateToProps)(wrappedComponent);
