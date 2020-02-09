import React, { Component } from "react";
import CreateProjectButton from "./CreateProjectButton/CreateProjectButton";
import ProjectCard from "./ProjectCard/ProjectCard";

import "./css/projects-page.css";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="projects-page">
        <div className="projects-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <CreateProjectButton />
      </div>
    );
  }
}
