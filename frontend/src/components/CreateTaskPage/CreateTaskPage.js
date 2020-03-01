import React, { Component } from "react";
import { SeverityCheckbox } from "./SeverityCheckbox/SeverityCheckbox";

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
      <form className="task-creation">
        <div className="task-creation__top">
          <label className="task-creation__top__name">
            Name:
            <input
              name="taskName"
              type="text"
              value={this.state.taskName}
              onChange={this.handleInputChange}
            />
          </label>
          <div className="task-creation__top__severity">
            <div className="task-creation__top__severity__label">Severity</div>
            <div className="task-creation__top__severity__checkboxes">
              <SeverityCheckbox severity="High" />
              <SeverityCheckbox severity="Medium" />
              <SeverityCheckbox severity="Low" />
            </div>
          </div>
        </div>
        <label className="task-creation__summary">
          Summary:
          <input
            name="taskSummary"
            type="text"
            value={this.state.taskSummary}
            onChange={this.handleInputChange}
          />
        </label>
        <label className="task-creation__description">
          Description:
          <input
            name="taskDescription"
            type="text"
            value={this.state.taskDescription}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
