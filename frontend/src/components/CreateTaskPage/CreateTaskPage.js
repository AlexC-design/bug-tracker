import React, { Component } from "react";

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
          <label>
            Name:
            <input
              name="taskName"
              type="text"
              value={this.state.taskName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
      </form>
    );
  }
}
