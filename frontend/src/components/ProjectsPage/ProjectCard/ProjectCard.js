import React, { Component } from "react";
import ProjectBar from "./ProjectBar/ProjectBar";

import "./css/project-card.css";

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card">
        <ProjectBar projectName={this.props.projectName} />
      </div>
    );
  }
}
