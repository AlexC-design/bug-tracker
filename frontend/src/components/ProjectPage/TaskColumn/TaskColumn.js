import React from "react";
import TaskCard from "./TaskCard/TaskCard";
import SimpleBarReact from "simplebar-react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/items";
import { changeColumn } from "../../../store/state/selectedProject/index";
import { connect } from "react-redux";
import { sortTasksBySeverity } from "./sortTasksBySeverity";

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

  const showCompletedColumn =
    sortTasksBySeverity(tasks)[1].length === 0 ? false : true;

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

          {showCompletedColumn && (
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
