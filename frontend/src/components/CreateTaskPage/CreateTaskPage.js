import React, { Component } from "react";
import { connect } from "react-redux";
import { SeverityCheckbox } from "./SeverityCheckbox/SeverityCheckbox";
import { EnvironmentDropdown } from "./EnvironmentDropdown/EnvironmentDropdown";
import { TaskButton } from "./TaskButton/TaskButton";
import { selectProject } from "../../store/state/selectedProject/index";

import "./css/create-task-page.css";

class CreateTaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskSeverity: "medium",
      taskSummary: "",
      taskDescription: "",
      environment: "Select",
      isAdmin: true
    };
  }

  componentDidMount() {
    console.log(this.props.selectedProject);
    if (!this.props.selectedProject.projectName) {
      console.log("FETCHING");
      this.props.selectProject(this.props.match.params.id);
    }
  }

  selectSeverity = severity => {
    this.setState({ taskSeverity: severity });
  };
  selectEnvironment = environment => {
    this.setState({ environment });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="task-creation">
        <div className="task-creation__top">
          <form className="task-creation__left">
            <div className="task-creation__left__top">
              <label className="task-creation__left__top__name">
                <span>Name</span>
                <input
                  name="taskName"
                  type="text"
                  autoComplete="off"
                  value={this.state.taskName}
                  onChange={this.handleInputChange}
                />
              </label>
              <div className="task-creation__left__top__severity">
                <div className="task-creation__left__top__severity__label">
                  Severity
                </div>
                <div className="task-creation__left__top__severity__checkboxes">
                  <SeverityCheckbox
                    severity="High"
                    selectSeverity={this.selectSeverity}
                    selected={this.state.taskSeverity === "High" ? true : false}
                  />
                  <SeverityCheckbox
                    severity="Medium"
                    selectSeverity={this.selectSeverity}
                    selected={
                      this.state.taskSeverity === "Medium" ? true : false
                    }
                  />
                  <SeverityCheckbox
                    severity="Low"
                    selectSeverity={this.selectSeverity}
                    selected={this.state.taskSeverity === "Low" ? true : false}
                  />
                </div>
              </div>
            </div>
            <label className="task-creation__left__summary">
              <span>Summary</span>
              <input
                name="taskSummary"
                type="text"
                autoComplete="off"
                value={this.state.taskSummary}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="task-creation__left__description">
              <span>Description</span>
              <textarea
                name="taskDescription"
                type="text"
                autoComplete="off"
                value={this.state.taskDescription}
                onChange={this.handleInputChange}
              />
            </label>
          </form>
          <div className="task-creation__right">
            <EnvironmentDropdown
              selectEnvironment={this.selectEnvironment}
              environment={this.state.environment}
            />
          </div>
        </div>

        <div className="task-creation__bottom">
          <TaskButton action="Cancel" />
          <TaskButton action="Create" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedProject: state.selectedProject
});

export default connect(mapStateToProps, { selectProject })(CreateTaskPage);
