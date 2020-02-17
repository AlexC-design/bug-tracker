import React, { Component } from "react";
import ProjectBar from "./ProjectBar/ProjectBar";
import { Link, withRouter } from "react-router-dom";

import "./css/project-card.css";

class ProjectCard extends Component {
  handleClick = () => {
    this.props.history.push(`/project/${this.props.project._id}`);
  };

  render() {
    console.log(this.props);

    return (
      <div onClick={this.handleClick} className="project-card">
        <ProjectBar project={this.props.project} />
      </div>
    );
  }
}

export default withRouter(ProjectCard);
