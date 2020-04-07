import React, { Component } from "react";
import keyIcon from "../../../../assets/svg/key-icon.svg";
import userIcon from "../../../../assets/svg/user-icon.svg";
import plusSign from "../../../../assets/svg/plus-icon.svg";
import { connect } from "react-redux";
import { deleteProject } from "../../../../store/state/projects";
import { isUserAdmin } from "../../../../utils/isUserAdmin";

import "./css/project-bar.css";

class ProjectBar extends Component {
  onDeleteProject(id, event) {
    this.props.deleteProject(id);
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
            onClick={event => this.onDeleteProject(_id, event)}
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

export default connect(mapStateToProps, { deleteProject })(ProjectBar);
