import React, { Component } from "react";
import keyIcon from "../../../../assets/svg/key-icon.svg";
import userIcon from "../../../../assets/svg/user-icon.svg";
import plusSign from "../../../../assets/svg/plus-icon.svg";
import { connect } from "react-redux";
import { isUserAdmin } from "../../../../utils/isUserAdmin";
import { deleteProjectOn } from "../../../../store/state/notifications";

import "./css/project-bar.css";

class ProjectBar extends Component {
  onDeleteProject(projectId, projectName, event) {
    this.props.deleteProjectOn(projectId, projectName);
    event.stopPropagation();
  }

  render() {
    const { projectName, _id, projectMembers } = this.props.project;
    const { userId } = this.props;
    const isAdmin = isUserAdmin(userId, projectMembers);

    return (
      <div className="project-bar">
        <img
          src={isAdmin ? keyIcon : userIcon}
          className="project-bar__project-icon"
          alt="key"
        />
        <div className="project-bar__project-name">{projectName}</div>
        {isAdmin ? (
          <button
            onClick={event => this.onDeleteProject(_id, projectName, event)}
            className="project-bar__delete-button"
          >
            <img
              src={plusSign}
              className="project-bar__delete-button__cross"
              alt="plus"
            />
          </button>
        ) : (
          <div
            className="project-bar__placeholder"
            style={{ width: "100px" }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userDetails._id.toString()
});

export default connect(mapStateToProps, { deleteProjectOn })(ProjectBar);
