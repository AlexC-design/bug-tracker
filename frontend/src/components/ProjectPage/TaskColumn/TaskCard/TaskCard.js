import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../../utils/items";
import { intToSeverity } from "../../../../utils/severities";

import "./css/task-card.css";

const TaskCard = ({ taskDetails, projectId, columnLoading }) => {
  const formatSummary = ({ taskSummary }) => {
    const desc = taskSummary.substring(0, 150);
    const format = taskSummary.length > 150 ? "..." : "";

    return desc + format;
  };

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      taskId: taskDetails._id,
      projectId: projectId,
      oldPriority: taskDetails.taskPriority
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <>
      <Link
        ref={drag}
        to={`/project/${projectId}/task${taskDetails._id}`}
        className={`task-card task-card${
          isDragging || columnLoading ? "--dragging" : ""
        }`}
      >
        <div className="task-card__details">
          <div className="task-card__details__name">{taskDetails.taskName}</div>
          <div
            className={`task-card__details__severity task-card__details__severity--${
              intToSeverity[taskDetails.taskSeverity]
            }`}
          />
        </div>
        <div className="task-card__summary">{formatSummary(taskDetails)}</div>
      </Link>
    </>
  );
};

const mapStateToProps = state => ({
  projectId: state.selectedProject._id,
  userId: state.userDetails._id,
  columnLoading: state.selectedProject.columnLoading
});

export default connect(mapStateToProps)(TaskCard);
