import React, { Component } from "react";
import { connect } from "react-redux";
import { TaskColumn } from "./TaskColumn/TaskColumn";
import { selectProject } from "../../store/state/selectedProject";
import CreateTaskButton from "./CreateTaskButton/CreateTaskButton";

import "./css/project-page.css";

class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProject: ""
    };
  }

  componentDidMount() {
    this.props.selectProject(this.props.match.params.id);
  }

  render() {
    return (
      <div className="project-page">
        <TaskColumn priority="High Priority" />
        <TaskColumn priority="Mid Priority" />
        <TaskColumn priority="Low Priority" />
        <TaskColumn priority="Trivial" />
        <CreateTaskButton />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedProject: state.selectedProject
});

export default connect(mapStateToProps, { selectProject })(ProjectPage);
