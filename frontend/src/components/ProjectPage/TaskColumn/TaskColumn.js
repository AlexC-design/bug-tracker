import React, { useState, useEffect, useRef } from "react";
import TaskCard from "./TaskCard/TaskCard";
import SimpleBarReact from "simplebar-react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/items";
import { changeColumn } from "../../../store/state/selectedProject/index";

import "simplebar/src/simplebar.css";
import "./css/task-column.css";
import { connect } from "react-redux";

const TaskColumn = ({ priority, tasks, changeColumn, onCreatedPage }) => {
  const [noCompleted, setNoCompleted] = useState(true);

  const taskColumn = useRef();

  const checkCompleted = () => {
    // let show = true;

    // tasks.forEach(task => {
    //   if (task.taskCompleted) {
    //     show = true;
    //   }
    // });

    if (taskColumn.current) {
      console.log(tasks.map(task => task.taskName));
      // if (show) {
      if (
        taskColumn.current.offsetHeight < 100 &&
        taskColumn.current.offsetHeight > 50
      ) {
        console.log(priority, "false", taskColumn.current.offsetHeight);
        return false;
      } else {
        console.log(priority, "true", taskColumn.current.offsetHeight);

        return true;
      }
      // }
    }

    //   if (taskColumn.current.offsetHeight < 100 && show) {
    //     show = false;
    //   }
    // }

    // return show;
  };

  useEffect(() => {
    if (checkCompleted() !== noCompleted) {
      setNoCompleted(checkCompleted());
    }
  });

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
          {tasks.map(task => {
            if (!task.taskCompleted && task.taskSeverity === "High") {
              return (
                <TaskCard
                  onCreatedPage={onCreatedPage}
                  taskDetails={task}
                  key={task._id}
                />
              );
            } else {
              return null;
            }
          })}
          {tasks.map(task => {
            if (!task.taskCompleted && task.taskSeverity === "Medium") {
              return (
                <TaskCard
                  onCreatedPage={onCreatedPage}
                  taskDetails={task}
                  key={task._id}
                />
              );
            } else {
              return null;
            }
          })}
          {tasks.map(task => {
            if (!task.taskCompleted && task.taskSeverity === "Low") {
              return (
                <TaskCard
                  onCreatedPage={onCreatedPage}
                  taskDetails={task}
                  key={task._id}
                />
              );
            } else {
              return null;
            }
          })}
          {noCompleted && (
            <div className="task-column__completed" ref={taskColumn}>
              <div className="task-column__completed__title">Completed</div>
              {tasks.map(task => {
                if (task.taskCompleted && task.taskSeverity === "High") {
                  return (
                    <TaskCard
                      onCreatedPage={onCreatedPage}
                      taskDetails={task}
                      key={task._id}
                    />
                  );
                } else {
                  return null;
                }
              })}
              {tasks.map(task => {
                if (task.taskCompleted && task.taskSeverity === "Medium") {
                  return (
                    <TaskCard
                      onCreatedPage={onCreatedPage}
                      taskDetails={task}
                      key={task._id}
                    />
                  );
                } else {
                  return null;
                }
              })}
              {tasks.map(task => {
                if (task.taskCompleted && task.taskSeverity === "Low") {
                  return (
                    <TaskCard
                      onCreatedPage={onCreatedPage}
                      taskDetails={task}
                      key={task._id}
                    />
                  );
                } else {
                  return null;
                }
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
