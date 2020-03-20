import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { SeverityCheckbox } from "../CreateTaskPage/SeverityCheckbox/SeverityCheckbox";
import { CompletionToggle } from "./CompletionToggle/CompletionToggle";
import { TaskInput } from "../CreateTaskPage/TaskInput/TaskInput";
import { EnvironmentDropdown } from "../CreateTaskPage/EnvironmentDropdown/EnvironmentDropdown";
import TaskButton from "../CreateTaskPage/TaskButton/TaskButton";
import userIcon from "../../assets/svg/member-icon.svg";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./css/view-task-page.css";

export const ViewTaskPage = ({ match }) => {
  const [taskDetails, setTaskDetails] = useState(null);

  useEffect(() => {
    if (taskDetails === null) {
      axios
        .get(`api/tasks/${match.params.taskId}`)
        .then(res => setTaskDetails(res.data));
    }
  }, [taskDetails, match.params.taskId]);

  if (!taskDetails) {
    return (
      <div className="task-view">
        <LoadingAnimation />
      </div>
    );
  } else {
    return (
      <div className="task-view">
        <div className="task-view__top">
          <form className="task-view__left">
            <div className="task-view__left__top">
              <div className="task-view__left__top__task-name">
                {taskDetails.taskName}
              </div>
              <SeverityCheckbox
                severity={taskDetails.taskSeverity}
                selectSeverity={"disabled"}
                selected={true}
              />
            </div>
            <TaskInput
              inputType="Summary"
              taskDetails={taskDetails}
              handleInputChange={"disabled"}
            />
            <TaskInput
              inputType="Description"
              taskDetails={taskDetails}
              handleInputChange={"disabled"}
            />
          </form>
          <div className="task-view__right">
            <EnvironmentDropdown
              environment={taskDetails.taskEnvironment}
              selectEnvironment={"disabled"}
            />
            <div className="task-view__right__user-details">
              <p>
                Created by: <b>{taskDetails.taskCreator.name}</b>
                <img src={userIcon} alt="user" />
              </p>
              <p>
                on{" "}
                <b>{moment(taskDetails.creationDate).format("Do MMM YYYY")}</b>
              </p>
            </div>
            <CompletionToggle />
          </div>
        </div>

        <div className="task-view__bottom">
          <TaskButton action="Cancel" />
          <TaskButton action="Create" taskDetails={taskDetails} />
        </div>
      </div>
    );
  }
};
