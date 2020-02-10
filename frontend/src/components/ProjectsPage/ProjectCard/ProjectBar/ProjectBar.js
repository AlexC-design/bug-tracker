import React, { Component } from "react";
import keyIcon from "../../../../assets/svg/key-icon.svg";
import plusSign from "../../../../assets/svg/plus-icon.svg";
import { connect } from "react-redux";
import { deleteProject } from "../../../../store/state/projects";

import "./css/project-bar.css";

class ProjectBar extends Component {
  render() {
    const { projectName, _id } = this.props.project;

    return (
      <div className="project-bar">
        <img src={keyIcon} className="project-bar__project-icon" alt="key" />
        <div className="project-bar__project-name">{projectName}</div>
        <button
          onClick={() => this.props.deleteProject(_id)}
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