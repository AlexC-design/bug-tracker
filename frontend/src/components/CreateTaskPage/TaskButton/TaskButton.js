import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  createTask,
  deleteTask,
  taskEdit
} from "../../../store/state/selectedProject";
import { validateTaskDetails } from "./validateTaskDetails";
import { buildTaskDetails } from "./buildTaskDetails";

import "./css/task-button.css";

const findTaskById = (project, taskId) => {
  let result = {};

  for (let taskPriority in project.tasks) {
    project.tasks[taskPriority].forEach(task => {
      if (task._id === taskId) {
        result = task;
        return;
      }
    });
  }

  return result;
};

const TaskButton = ({
  history,
  action,
  taskDetails,
  selectedProject,
  createTask,
  deleteTask,
  currentUser,
  taskId,
  taskEdit
}) => {
  const buttonAction = action => {
    const projectId = selectedProject._id;

    switch (action) {
      case "Cancel":
        history.goBack();
        break;
      case "OK":
        history.goBack();
        break;
      case "Create":
        const validationMessage = validateTaskDetails(taskDetails);

        if (validationMessage === "valid") {
          createTask(buildTaskDetails(taskDetails, currentUser), projectId);
          history.goBack();
        } else {
          alert(validationMessage);
        }
        break;
      case "Edit":
        history.push(`/project/${projectId}/edit-task/${taskDetails._id}`);
        break;
      case "Save":
        taskEdit(
          projectId,
          findTaskById(selectedProject, taskId).taskPriority,
          taskId,
          taskDetails
        );
        history.goBack();
        break;
      case "Delete":
        deleteTask(projectId, taskDetails.taskPriority, taskDetails._id);
        history.goBack();
        break;
      default:
    }
  };

  return (
    <button
      onClick={() => buttonAction(action)}
      className={`task-button task-button--${action}`}
    >
      {action}
    </button>
  );
};

const mapStateToProps = state => ({
  currentUser: {
    _id: state.userDetails.userId,
    name: state.userDetails.userName
  },
  selectedProject: state.selectedProject
});

const wrappedComponent = withRouter(TaskButton);

export default connect(mapStateToProps, { createTask, deleteTask, taskEdit })(
  wrappedComponent
);
