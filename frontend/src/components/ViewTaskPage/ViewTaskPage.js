import React from "react";
import { SeverityCheckbox } from "../CreateTaskPage/SeverityCheckbox/SeverityCheckbox";
import { CompletionToggle } from "./CompletionToggle/CompletionToggle";
import { TaskInput } from "../CreateTaskPage/TaskInput/TaskInput";
import { EnvironmentDropdown } from "../CreateTaskPage/EnvironmentDropdown/EnvironmentDropdown";
import TaskButton from "../CreateTaskPage/TaskButton/TaskButton";
import userIcon from "../../assets/svg/member-icon.svg";

import "./css/view-task-page.css";

export const ViewTaskPage = ({ taskDetails }) => {
  return (
    <div className="task-view">
      <div className="task-view__top">
        <form className="task-view__left">
          <div className="task-view__left__top">
            <div className="task-view__left__top__task-name">
              {taskDetails.taskName}
            </div>
            <SeverityCheckbox />
          </div>
          <TaskInput inputType="Summary" taskDetails={taskDetails} />
          <TaskInput inputType="Description" taskDetails={taskDetails} />
        </form>
        <div className="task-view__right">
          <EnvironmentDropdown environment={taskDetails.taskEnvironment} />
          <div className="task-view__right__user-details">
            <p>
              Created by: <b>{}</b>
              <img src={userIcon} alt="user" />
            </p>
            <p>
              on <b>{}</b>
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
};
