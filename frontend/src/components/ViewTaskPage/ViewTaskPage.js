import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { SeverityCheckbox } from "../CreateTaskPage/SeverityCheckbox/SeverityCheckbox";
import { CompletionToggle } from "./CompletionToggle/CompletionToggle";
import { TaskInput } from "../CreateTaskPage/TaskInput/TaskInput";
import { EnvironmentDropdown } from "../CreateTaskPage/EnvironmentDropdown/EnvironmentDropdown";
import TaskButton from "../CreateTaskPage/TaskButton/TaskButton";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { taskCompletion } from "../../store/state/selectedProject/index";
import { isUserAdmin } from "../../utils/isUserAdmin";

import "./css/view-task-page.css";

const ViewTaskPage = ({
  match,
  taskCompletion,
  storedTasks,
  completionLoading,
  userId,
  projectMembers,
  editingLoading
}) => {
  const [taskDetails, setTaskDetails] = useState(null);

  const setTaskCompleted = () => {
    taskCompletion(match.params.id, taskDetails.taskPriority, taskDetails._id);
  };

  useEffect(() => {
    for (let taskPriority in storedTasks) {
      let task = storedTasks[`${taskPriority}`].find(
        task => task._id === match.params.taskId
      );
      if (task && task.taskName) {
        setTaskDetails(task);
      }
    }
  }, [
    taskDetails,
    match.params.taskId,
    match.params.id,
    storedTasks,
    editingLoading
  ]);

  const getTaskCompletion = tasks => {
    for (let taskPriority in tasks) {
      let task = tasks[`${taskPriority}`].find(
        task => task._id === match.params.taskId
      );
      if (task && task.taskName) {
        return task.taskCompleted;
      }
    }
  };

  const ownsTask = userId => {
    return taskDetails.taskCreator._id === userId ? true : false;
  };

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
                Created by:<b>{taskDetails.taskCreator.name}</b>
              </p>
              <p className="task-view__right__user-details__creation-date">
                on
                <b>{moment(taskDetails.creationDate).format("Do MMM YYYY")}</b>
              </p>
            </div>
            {isUserAdmin(userId, projectMembers) && (
              <CompletionToggle
                completionLoading={completionLoading}
                taskCompleted={getTaskCompletion(storedTasks)}
                setTaskCompleted={setTaskCompleted}
              />
            )}
          </div>
        </div>

        <div className="task-view__bottom">
          {(ownsTask(userId) || isUserAdmin(userId, projectMembers)) && (
            <TaskButton action="Delete" taskDetails={taskDetails} />
          )}
          {(ownsTask(userId) || isUserAdmin(userId, projectMembers)) && (
            <TaskButton action="Edit" taskDetails={taskDetails} />
          )}
          <TaskButton action="OK" taskDetails={taskDetails} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  storedTasks: state.selectedProject.tasks,
  completionLoading: state.selectedProject.completionLoading,
  userId: state.userDetails._id,
  projectMembers: state.selectedProject.projectMembers,
  editingLoading: state.selectedProject.editingLoading
});

export default connect(mapStateToProps, { taskCompletion })(ViewTaskPage);
