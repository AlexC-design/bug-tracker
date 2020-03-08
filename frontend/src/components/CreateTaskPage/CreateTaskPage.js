import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SeverityCheckbox } from "./SeverityCheckbox/SeverityCheckbox";
import { EnvironmentDropdown } from "./EnvironmentDropdown/EnvironmentDropdown";
import TaskButton from "./TaskButton/TaskButton";
import { selectProject } from "../../store/state/selectedProject/index";

import "./css/create-task-page.css";

const CreateTaskPage = ({ selectProject, selectedProject }) => {
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    taskSeverity: "",
    taskSummary: "",
    taskDescription: "",
    environment: "Select"
  });

  useEffect(() => {
    if (selectedProject.projectName) {
      selectProject(this.props.match.params.id);
    }
  }, []);

  useEffect(() => {
    console.log(taskDetails);
  });

  const selectSeverity = severity => {
    setTaskDetails({ ...taskDetails, taskSeverity: severity });
  };
  const selectEnvironment = environment => {
    setTaskDetails({ ...taskDetails, environment });
  };

  const handleInputChange = event => {
    const name = event.target.name;
    setTaskDetails({
      ...taskDetails,
      [name]: event.target.value
    });
  };

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
                value={taskDetails.taskName}
                onChange={handleInputChange}
              />
            </label>
            <div className="task-creation__left__top__severity">
              <div className="task-creation__left__top__severity__label">
                Severity
              </div>
              <div className="task-creation__left__top__severity__checkboxes">
                <SeverityCheckbox
                  severity="High"
                  selectSeverity={selectSeverity}
                  selected={taskDetails.taskSeverity === "High" ? true : false}
                />
                <SeverityCheckbox
                  severity="Medium"
                  selectSeverity={selectSeverity}
                  selected={
                    taskDetails.taskSeverity === "Medium" ? true : false
                  }
                />
                <SeverityCheckbox
                  severity="Low"
                  selectSeverity={selectSeverity}
                  selected={taskDetails.taskSeverity === "Low" ? true : false}
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
              value={taskDetails.taskSummary}
              onChange={handleInputChange}
            />
          </label>
          <label className="task-creation__left__description">
            <span>Description</span>
            <textarea
              name="taskDescription"
              type="text"
              autoComplete="off"
              value={taskDetails.taskDescription}
              onChange={handleInputChange}
            />
          </label>
        </form>
        <div className="task-creation__right">
          <EnvironmentDropdown
            selectEnvironment={selectEnvironment}
            environment={taskDetails.environment}
          />
        </div>
      </div>

      <div className="task-creation__bottom">
        <TaskButton action="Cancel" />
        <TaskButton action="Create" taskDetails={taskDetails} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedProject: state.selectedProject
});

export default connect(mapStateToProps, { selectProject })(CreateTaskPage);
