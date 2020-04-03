import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";

import "./css/navbar-options.css";

const NavbarOptions = ({ history, isAdmin, projectId }) => {
  const [currentPage, setCurrentPage] = useState("other");

  useEffect(() => {
    let match;
    history.listen(location => {
      match = matchPath(location.pathname, {
        path: "/project/:id/:page",
        exact: true
      });
      match !== null
        ? setCurrentPage(match.params.page)
        : setCurrentPage("other");
    });
  });

  const switchPage = page => {
    history.replace(`/project/${projectId}/${page}`);
  };

  return (
    <div className="navbar-options">
      {isAdmin && (
        <div
          onClick={() => switchPage("members")}
          className={`navbar-options__members navbar-options__members${
            currentPage === "members" ? "--active" : ""
          }`}
        >
          Members
        </div>
      )}
      <div
        onClick={() => switchPage("created")}
        className={`navbar-options__created navbar-options__created${
          currentPage === "created" ? "--active" : ""
        }`}
      >
        Created
      </div>
      {isAdmin && (
        <div
          onClick={() => switchPage("unassigned")}
          className={`navbar-options__unassigned navbar-options__unassigned${
            currentPage === "unassigned" ? "--active" : ""
          }`}
        >
          Unassigned
          <div className="navbar-options__notification" />
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
