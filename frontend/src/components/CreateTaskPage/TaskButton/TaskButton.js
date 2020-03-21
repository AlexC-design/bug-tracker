import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createTask } from "../../../store/state/tasks";
import { validateTaskDetails } from "./validateTaskDetails";
import { buildTaskDetails } from "./buildTaskDetails";

import "./css/task-button.css";

const TaskButton = ({
  history,
  action,
  taskDetails,
  projectId,
  createTask,
  currentUser
}) => {
  const buttonAction = action => {
    switch (action) {
      case "Cancel":
        history.goBack();
        break;
      case "Create":
        const validationMessage = validateTaskDetails(taskDetails);

        if (validationMessage === "valid") {
          createTask(buildTaskDetails(taskDetails, currentUser), projectId);
          history.push(`/project/${projectId}`);
        } else {
          alert(validationMessage);
        }
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
    _id: state.userDetails.guestId,
    name: state.userDetails.guestName
  },
  projectId: state.selectedProject._id
});

const wrappedComponent = withRouter(TaskButton);

export default connect(mapStateToProps, { createTask })(wrappedComponent);
