import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
import { setFilter } from "../../../store/state/selectedProject/index";

import "./css/navbar-options.css";

const NavbarOptions = ({
  location,
  history,
  isAdmin,
  projectId,
  unassignedTasksNo,
  setFilter,
  filter
}) => {
  const [currentPage, setCurrentPage] = useState("other");

  useEffect(() => {
    let match = matchPath(location.pathname, {
      path: "/project/:id/:page",
      exact: true
    });
    match !== null
      ? setCurrentPage(match.params.page)
      : setCurrentPage("other");

    const unlisten = history.listen(location => {
      match = matchPath(location.pathname, {
        path: "/project/:id/:page",
        exact: true
      });
      match !== null
        ? setCurrentPage(match.params.page)
        : setCurrentPage("other");
    });
    return () => {
      unlisten();
    };
  }, [setCurrentPage, history, location.pathname]);

  const hideFilters = () => {
    return (
      location.pathname.includes("members") ||
      location.pathname.includes("task")
    );
  };

  const switchPage = page => {
    history.replace(`/project/${projectId}/${page}`);
  };

  return (
    <div className="navbar-options">
      <div
        className={`filters-container filters-container${
          hideFilters() ? "--hidden" : ""
        }`}
      >
        <div
          onClick={() => setFilter("created", filter.created ? false : true)}
          className={`navbar-options__created navbar-options__created${
            filter.created ? "--active" : ""
          }`}
        >
          Created by me
        </div>

        <div className="unassigned-container">
          {unassignedTasksNo !== 0 && (
            <div className="unassigned-notification" />
          )}
          <div
            onClick={() =>
              setFilter("unassigned", filter.unassigned ? false : true)
            }
            className={`navbar-options__unassigned--text navbar-options__unassigned${
              filter.unassigned ? "--active" : ""
            }`}
          >
            Unassigned
          </div>
        </div>
      </div>
      {
        <div
          onClick={() => switchPage("members")}
          className={`navbar-options__members navbar-options__members${
            currentPage === "members" ? "--active" : ""
          }`}
        >
          Members
        </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  projectId: state.selectedProject._id,
  unassignedTasksNo: state.selectedProject.tasks
    ? state.selectedProject.tasks.Unassigned.length
    : 0,
  filter: state.selectedProject.filter
});

const wrappedComponent = withRouter(NavbarOptions);

export default connect(mapStateToProps, { setFilter })(wrappedComponent);
