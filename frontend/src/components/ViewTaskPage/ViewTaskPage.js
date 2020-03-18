import React from "react";
import { SeverityCheckbox } from "../CreateTaskPage/SeverityCheckbox/SeverityCheckbox";
import { CompletionToggle } from "./CompletionToggle/CompletionToggle";
import { TaskInput } from "../CreateTaskPage/TaskInput/TaskInput";
import { EnvironmentDropdown } from "../CreateTaskPage/EnvironmentDropdown/EnvironmentDropdown";
import { TaskButton } from "../CreateTaskPage/TaskButton/TaskButton";

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
        <div className="task-view__right">
          <EnvironmentDropdown
            selectEnvironment={selectEnvironment}
            environment={taskDetails.taskEnvironment}
          />
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
