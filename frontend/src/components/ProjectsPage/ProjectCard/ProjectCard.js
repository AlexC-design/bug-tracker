import React, { Component } from "react";
import { withRouter } from "react-router";
import ProjectBar from "./ProjectBar/ProjectBar";
import { ThumbnailPreview } from "./ThumbnailPreview/ThumbnailPreview";

import "./css/project-card.css";

class ProjectCard extends Component {
  handleClick = () => {
    this.props.history.push(`/project/${this.props.project._id}`);
  };

  render() {
    return (
      <div onClick={this.handleClick} className="project-card">
        <ThumbnailPreview
          taskColumns={Object.values(this.props.project.tasks)}
        />
        <ProjectBar project={this.props.project} />
      </div>
    );
  }
}

export default withRouter(ProjectCard);
