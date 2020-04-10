import React from "react";
import TaskCard from "./TaskCard/TaskCard";
import SimpleBarReact from "simplebar-react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/items";
import { changeColumn } from "../../../store/state/selectedProject/index";
import { connect } from "react-redux";

import "simplebar/src/simplebar.css";
import "./css/task-column.css";

const TaskColumn = ({ priority, tasks, changeColumn, onCreatedPage }) => {
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
          {sortTasksBySeverity(tasks)[0].map(task => {
            return (
              <TaskCard
                onCreatedPage={onCreatedPage}
                taskDetails={task}
                key={task._id}
              />
            );
          })}

          {sortTasksBySeverity(tasks)[1].length > 0 && (
            <div className="task-column__completed">
              <div className="task-column__completed__title">Completed</div>
              {sortTasksBySeverity(tasks)[1].map(task => {
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
          {(priority === "Unassigned" || priority === "Trivial") && (
            <div className="task-column__spacing" />
          )}
        </SimpleBarReact>
      ) : (
        <div className="task-column__empty"></div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  columnLoading: state.selectedProject.columnLoading
});

export default connect(mapStateToProps, { changeColumn })(TaskColumn);
