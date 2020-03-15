import React, { Component } from "react";
import { connect } from "react-redux";
import { TaskColumn } from "./TaskColumn/TaskColumn";
import { selectProject } from "../../store/state/selectedProject";
import { getTasks } from "../../store/state/tasks";
import CreateTaskButton from "./CreateTaskButton/CreateTaskButton";

import "./css/project-page.css";

class ProjectPage extends Component {
  componentDidMount() {
    this.props.selectProject(this.props.match.params.id);
    this.props.getTasks();
  }

  render() {
    return (
      <div className="project-page">
        <TaskColumn priority="High Priority" tasks={this.props.tasks} />
        <TaskColumn priority="Mid Priority" tasks={this.props.tasks} />
        <TaskColumn priority="Low Priority" tasks={this.props.tasks} />
        <TaskColumn priority="Trivial" tasks={this.props.tasks} />
        <CreateTaskButton projectId={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedProject: state.selectedProject,
  tasks: state.tasks.tasks
});

export default connect(mapStateToProps, { selectProject, getTasks })(
  ProjectPage
);
