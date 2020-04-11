import React from "react";
import TaskCard from "./TaskCard/TaskCard";
import SimpleBarReact from "simplebar-react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/items";
import { changeColumn } from "../../../store/state/selectedProject/index";
import { connect } from "react-redux";

import "simplebar/src/simplebar.css";
import "./css/task-column.css";

const TaskColumn = ({
  priority,
  tasks,
  changeColumn,
  onCreatedPage,
  userId
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      if (item.oldPriority.split(" ")[0] !== priority.split(" ")[0]) {
        changeColumn(
          item.projectId,
          item.taskId,
          item.oldPriority.split(" ")[0],
          priority.split(" ")[0]
        );
      }
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  const sortTasksBySeverity = tasks => {
    let sortedTasks = [...tasks].sort(
      (task1, task2) => task1.taskSeverity - task2.taskSeverity
    );

    let sortedTasksCompleted = [];

    for (let i = 0; i < sortedTasks.length; i++) {
      if (sortedTasks[i].taskCompleted) {
        sortedTasksCompleted.push(sortedTasks[i]);
        sortedTasks.splice(i, 1);
        i--;
      }
    }

    return [sortedTasks, sortedTasksCompleted];
  };

  const filterByCreated = (tasks, userId, onCreatedPage) => {
    return onCreatedPage
      ? [...tasks].filter(task => task.taskCreator._id === userId)
      : tasks;
  };

  const showCompletedColumn =
    filterByCreated(sortTasksBySeverity(tasks)[1], userId, onCreatedPage)
      .length === 0
      ? false
      : true;

  return (
    <div
      className={`task-column task-column${
        isOver ? "--over" : ""
      } task-column--${priority}`}
      ref={drop}
    >
      <div className="task-column__title">{priority}</div>
      {tasks.length ? (
        <SimpleBarReact>
          {filterByCreated(
            sortTasksBySeverity(tasks)[0],
            userId,
            onCreatedPage
          ).map(task => {
            return (
              <TaskCard
                onCreatedPage={onCreatedPage}
                taskDetails={task}
                key={task._id}
              />
            );
          })}

          {showCompletedColumn && (
            <div className="task-column__completed">
              <div className="task-column__completed__title">Completed</div>
              {filterByCreated(
                sortTasksBySeverity(tasks)[1],
                userId,
                onCreatedPage
              ).map(task => {
                return (
                  <TaskCard
                    onCreatedPage={onCreatedPage}
                    taskDetails={task}
                    key={task._id}
                  />
                );
              })}
            </div>
          )}
          {tasks.length && <div className="task-column__spacing" />}
        </SimpleBarReact>
      ) : (
        <div className="task-column__empty"></div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  columnLoading: state.selectedProject.columnLoading,
  userId: state.userDetails._id
});

export default connect(mapStateToProps, { changeColumn })(TaskColumn);
