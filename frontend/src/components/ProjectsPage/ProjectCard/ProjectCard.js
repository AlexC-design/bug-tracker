import React, { Component } from "react";
import ProjectBar from "./ProjectBar/ProjectBar";
import { Link } from "react-router-dom";

import "./css/project-card.css";

export default class ProjectCard extends Component {
  render() {
    return (
      <Link to={`/project/${this.props.project._id}`} className="project-card">
        <ProjectBar project={this.props.project} />
      </Link>
    );
  }
}
