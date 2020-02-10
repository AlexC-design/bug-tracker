import React, { Component } from "react";
import keyIcon from "../../../../assets/svg/key-icon.svg";
import plusSign from "../../../../assets/svg/plus-icon.svg";

import "./css/project-bar.css";

export default class ProjectBar extends Component {
  render() {
    return (
      <div className="project-bar">
        <img src={keyIcon} className="project-bar__project-icon" alt="key" />
        <div className="project-bar__project-name">
          {this.props.projectName}
        </div>
        <button className="project-bar__delete-button">
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
