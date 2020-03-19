import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./css/task-card.css";

const TaskCard = ({ taskDetails, projectId }) => {
  const formatSummary = ({ taskSummary }) => {
    const desc = taskSummary.substring(0, 150);
    const format = taskSummary.length > 150 ? "..." : "";

    return desc + format;
  };

  return (
    <Link
      to={`/project/${projectId}/task${taskDetails._id}`}
      className="task-card"
    >
      <div className="task-card__details">
        <div className="task-card__details__name">{taskDetails.taskName}</div>
        <div
          className={`task-card__details__severity task-card__details__severity--${taskDetails.taskSeverity}`}
        />
      </div>
      <div className="task-card__summary">{formatSummary(taskDetails)}</div>
    </Link>
  );
};

const mapStateToProps = state => ({
  projectId: state.selectedProject._id
});

export default connect(mapStateToProps)(TaskCard);
