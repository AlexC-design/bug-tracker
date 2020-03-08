import React from "react";
import { withRouter } from "react-router";

import "./css/task-button.css";

const TaskButton = ({ history, action, taskDetails }) => {
  const buttonAction = action => {
    switch (action) {
      case "Cancel":
        history.goBack();
      case "Create":
    }
  };

  console.log(taskDetails);

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
