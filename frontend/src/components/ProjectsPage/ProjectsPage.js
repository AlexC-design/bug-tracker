import React, { Component } from "react";
import { connect } from "react-redux";
import { getProjects } from "../../store/state/projects/";

import ProjectCard from "./ProjectCard/ProjectCard";
import CreateProjectButton from "./CreateProjectButton/CreateProjectButton";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./css/projects-page.css";

class ProjectsPage extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    if (!this.props.projects.loading) {
      return (
        <div className="projects-page">
          <div className="projects-container">
            {this.props.projects.projects.map(project => (
              <ProjectCard project={project} key={project._id} />
            ))}
          </div>
          <CreateProjectButton />
        </div>
      );
    } else {
      return (
        <div className="projects-page">
          <LoadingAnimation />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps, { getProjects })(ProjectsPage);
