import React, { Component } from "react";
import { TaskColumn } from "./TaskColumn/TaskColumn";

import "./css/project-page.css";

export default class ProjectPage extends Component {
  render() {
    return (
      <div className="project-page">
        <TaskColumn priority="High Priority" />
        <TaskColumn priority="Mid Priority" />
        <TaskColumn priority="Low Priority" />
        <TaskColumn priority="Trivial" />
      </div>
    );
  }
}
