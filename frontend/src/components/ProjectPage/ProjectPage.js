import React, { Component } from "react";
import { TaskColumn } from "./TaskColumn/TaskColumn";

import "./css/project-page.css";

export default class ProjectPage extends Component {
  render() {
    return (
      <div className="project-page">
        <TaskColumn />
      </div>
    );
  }
}
