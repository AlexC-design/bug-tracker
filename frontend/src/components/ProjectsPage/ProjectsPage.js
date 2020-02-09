import React, { Component } from "react";
import CreateProjectButton from "./CreateProjectButton/CreateProjectButton";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="projects-page">
        <CreateProjectButton />
      </div>
    );
  }
}
