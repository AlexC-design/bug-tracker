import React, { Component } from "react";
import { connect } from "react-redux";
import { TaskColumn } from "./TaskColumn/TaskColumn";
import { selectProject } from "../../store/state/selectedProject";
import CreateTaskButton from "./CreateTaskButton/CreateTaskButton";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./css/project-page.css";

class ProjectPage extends Component {
  componentDidMount() {
    this.props.selectProject(this.props.match.params.id);
  }

  render() {
    if (this.props.selectedProject._id) {
      return (
        <div className="project-page">
          <TaskColumn
            priority="High Priority"
            tasks={this.props.selectedProject.tasks.High}
          />
          <TaskColumn
            priority="Mid Priority"
            tasks={this.props.selectedProject.tasks.Medium}
          />
          <TaskColumn
            priority="Low Priority"
            tasks={this.props.selectedProject.tasks.Low}
          />
          <TaskColumn
            priority="Trivial"
            tasks={this.props.selectedProject.tasks.Trivial}
          />
          <CreateTaskButton projectId={this.props.match.params.id} />
        </div>
      );
    } else {
      return (
        <div className="project-page">
          <LoadingAnimation />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  selectedProject: state.selectedProject
});

export default connect(mapStateToProps, { selectProject })(ProjectPage);
