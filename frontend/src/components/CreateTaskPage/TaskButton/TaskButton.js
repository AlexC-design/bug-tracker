import React from "react";
import { withRouter } from "react-router";
import { validateTaskDetails } from "./validateTaskDetails";

import "./css/task-button.css";

const TaskButton = ({ history, action, taskDetails }) => {
  const buttonAction = action => {
    switch (action) {
      case "Cancel":
        history.goBack();
        break;
      case "Create":
        const validationMessage = validateTaskDetails(taskDetails);
        validationMessage === "valid"
          ? console.log("valid")
          : alert(validationMessage);
        break;
      default:
        console.log(`no action ' ${action} ' defined`);
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

export default withRouter(TaskButton);
