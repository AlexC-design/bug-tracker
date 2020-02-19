import React, { Component } from "react";
import ProjectBar from "./ProjectBar/ProjectBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectProject } from "../../../store/state/selectedProject";

import "./css/project-card.css";

class ProjectCard extends Component {
  handleClick = () => {
    this.props.history.push(`/project/${this.props.project._id}`);
    this.props.selectProject(this.props.project);
  };

  render() {
    return (
      <div onClick={this.handleClick} className="project-card">
        <ProjectBar project={this.props.project} />
      </div>
    );
  }
}

const wrappedCard = withRouter(ProjectCard);

const mapDispatchToProps = dispatch => ({
  selectProject: project => dispatch(selectProject(project))
});

export default connect(null, mapDispatchToProps)(wrappedCard);
