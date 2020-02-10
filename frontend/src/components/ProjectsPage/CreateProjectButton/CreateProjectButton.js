import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../../store/state/projects/index";

import "./css/create-project-button.css";

class CreateProjectButton extends Component {
  createNewProject = () => {
    let projectName = prompt("enter name");

    const newProject = {
      project_name: projectName
    };

    this.props.createProject(newProject);
  };

  render() {
    return (
      <div className="create-project-container">
        <button className={`create-button`} onClick={this.createNewProject}>
          <div className="create-button__plus create-button__plus--vertical" />
          <div className="create-button__plus create-button__plus--horizontal" />
        </button>
      </div>
    );
  }
}

export default connect(null, { createProject })(CreateProjectButton);
