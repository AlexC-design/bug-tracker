import React, { Component } from "react";
import { SeverityCheckbox } from "./SeverityCheckbox/SeverityCheckbox";
import { EnvironmentDropdown } from "./EnvironmentDropdown/EnvironmentDropdown";

export default class CreateTaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskSeverity: "medium",
      taskSummary: "",
      taskDescription: "",
      environment: "select"
    };
  }

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
        <form className="task-creation__left">
          <div className="task-creation__left__top">
            <label className="task-creation__left__top__name">
              Name:
              <input
                name="taskName"
                type="text"
                value={this.state.taskName}
                onChange={this.handleInputChange}
              />
            </label>
            <div className="task-creation__left__top__severity">
              <div className="task-creation__left__top__severity__label">
                Severity
              </div>
              <div className="task-creation__left__top__severity__checkboxes">
                <SeverityCheckbox severity="High" />
                <SeverityCheckbox severity="Medium" />
                <SeverityCheckbox severity="Low" />
              </div>
            </div>
          </div>
          <label className="task-creation__left__summary">
            Summary:
            <input
              name="taskSummary"
              type="text"
              value={this.state.taskSummary}
              onChange={this.handleInputChange}
            />
          </label>
          <label className="task-creation__left__description">
            Description:
            <input
              name="taskDescription"
              type="text"
              value={this.state.taskDescription}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
        <div className="task-creation__right">
          <EnvironmentDropdown />
        </div>
      </div>
    );
  }
}
