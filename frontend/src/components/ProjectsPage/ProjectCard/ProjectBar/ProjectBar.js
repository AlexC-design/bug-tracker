import React, { Component } from "react";
import keyIcon from "../../../../assets/svg/key-icon.svg";
import plusSign from "../../../../assets/svg/plus-icon.svg";
import { connect } from "react-redux";
import { deleteProject } from "../../../../store/state/projects";

import "./css/project-bar.css";

class ProjectBar extends Component {
  onDeleteProject(id, event) {
    this.props.deleteProject(id);
    event.stopPropagation();
  }

  render() {
    const { project_name, _id } = this.props.project;

    return (
      <div className="project-bar">
        <img src={keyIcon} className="project-bar__project-icon" alt="key" />
        <div className="project-bar__project-name">{project_name}</div>
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
      </div>
    );
  }
}

export default connect(null, { deleteProject })(ProjectBar);
