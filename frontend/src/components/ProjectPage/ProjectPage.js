import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { TaskColumn } from "./TaskColumn/TaskColumn";
import { selectProject } from "../../store/state/selectedProject";

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

  componentDidUpdate() {
    console.log(this.props.selectedProject);
  }

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

const mapStateToProps = state => ({
  selectedProject: state.selectedProject
});

export default connect(mapStateToProps, { selectProject })(ProjectPage);
