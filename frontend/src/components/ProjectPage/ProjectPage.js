import React, { Component } from "react";
import { connect } from "react-redux";
import TaskColumn from "./TaskColumn/TaskColumn";
import { selectProject } from "../../store/state/selectedProject";
import CreateTaskButton from "./CreateTaskButton/CreateTaskButton";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { withRouter } from "react-router";

import "./css/project-page.css";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onCreatedPage: this.props.location.pathname.includes("created")
        ? true
        : false
    };
  }

  componentDidMount() {
    console.log(this.state.projectName);
    console.log(this.props.selectedProject.projectName);
    this.props.selectProject(this.props.match.params.id);

    this.unlisten = this.props.history.listen(history => {
      if (history.pathname.includes("created")) {
        this.setState({ onCreatedPage: true });
      } else {
        if (this.state.onCreatePage) {
          this.setState({ onCreatePage: false });
        }
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    if (this.props.selectedProject._id) {
      return (
        <div className="project-page">
          <TaskColumn
            onCreatedPage={this.state.onCreatedPage}
            priority="High Priority"
            tasks={this.props.selectedProject.tasks.High}
          />
          <TaskColumn
            onCreatedPage={this.state.onCreatedPage}
            priority="Medium Priority"
            tasks={this.props.selectedProject.tasks.Medium}
          />
          <TaskColumn
            onCreatedPage={this.state.onCreatedPage}
            priority="Low Priority"
            tasks={this.props.selectedProject.tasks.Low}
          />
          <TaskColumn
            onCreatedPage={this.state.onCreatedPage}
            priority="Trivial"
            tasks={this.props.selectedProject.tasks.Trivial}
          />
          {this.props.location.pathname.includes("unassigned") && (
            <TaskColumn
              onCreatedPage={this.state.onCreatedPage}
              priority="Unassigned"
              tasks={this.props.selectedProject.tasks.Unassigned}
            />
          )}
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

const wrappedComponent = connect(mapStateToProps, { selectProject })(
  ProjectPage
);

export default withRouter(wrappedComponent);
