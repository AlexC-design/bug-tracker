import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectProject } from "../../store/state/selectedProject/index";
import { EnvironmentDropdown } from "./EnvironmentDropdown/EnvironmentDropdown";
import { TaskInput } from "./TaskInput/TaskInput";
import TaskButton from "./TaskButton/TaskButton";
import { loremIpsum } from "lorem-ipsum";

import "./css/create-task-page.css";
import { SeveritySection } from "./SeveritySection/SeveritySection";

const CreateTaskPage = ({ match, selectProject, selectedProject }) => {
  const [taskDetails, setTaskDetails] = useState({
    taskName: `Test Task ${Math.floor(Math.random() * 101)}`,
    taskSeverity: "",
    taskSummary: loremIpsum(),
    taskDescription: loremIpsum({
      count: 1,
      format: "plain",
      paragraphLowerBound: 3,
      paragraphUpperBound: 7,
      sentenceLowerBound: 5,
      sentenceUpperBound: 15,
      units: "paragraphs"
    }),
    taskEnvironment: "All"
  });

  useEffect(() => {
    if (!selectedProject) {
      selectProject(match.params.id);
    }
  }, [selectedProject, selectProject, match.params.id]);

  useEffect(() => {});

  const selectSeverity = severity => {
    setTaskDetails({ ...taskDetails, taskSeverity: severity });
  };
  const selectEnvironment = taskEnvironment => {
    setTaskDetails({ ...taskDetails, taskEnvironment });
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
            <TaskInput
              inputType="Name"
              taskDetails={taskDetails}
              handleInputChange={handleInputChange}
            />
            <SeveritySection
              selectSeverity={selectSeverity}
              taskDetails={taskDetails}
            />
          </div>
          <TaskInput
            inputType="Summary"
            taskDetails={taskDetails}
            handleInputChange={handleInputChange}
          />
          <TaskInput
            inputType="Description"
            taskDetails={taskDetails}
            handleInputChange={handleInputChange}
          />
        </form>
        <div className="task-creation__right">
          <EnvironmentDropdown
            selectEnvironment={selectEnvironment}
            environment={taskDetails.taskEnvironment}
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
