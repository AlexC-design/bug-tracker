import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";

import "./css/navbar-options.css";

const NavbarOptions = ({ history, isAdmin, projectId, unassignedTasksNo }) => {
  const [currentPage, setCurrentPage] = useState("other");

  console.log(unassignedTasksNo);

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
        <div className="unassigned-container">
          {unassignedTasksNo !== 0 && (
            <div className="unassigned-notification" />
          )}
          <div
            onClick={() => switchPage("unassigned")}
            className={`navbar-options__unassigned--text navbar-options__unassigned${
              currentPage === "unassigned" ? "--active" : ""
            }`}
          >
            Unassigned
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  projectId: state.selectedProject._id,
  unassignedTasksNo: state.selectedProject.tasks.Unassigned.length
});

const wrappedComponent = withRouter(NavbarOptions);

export default connect(mapStateToProps)(wrappedComponent);
