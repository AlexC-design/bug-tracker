import React, { useEffect } from "react";
import { connect } from "react-redux";
import TaskColumn from "./TaskColumn/TaskColumn";
import { selectProject } from "../../store/state/selectedProject";
import CreateTaskButton from "./CreateTaskButton/CreateTaskButton";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { withRouter } from "react-router";
import { priorities } from "../../utils/priorities";

import "./css/project-page.css";

const ProjectPage = ({
  selectProject,
  onCreatedPage,
  onUnassignedPage,
  selectedProject,
  match
}) => {
  useEffect(() => {
    selectProject(match.params.id);
  }, [match.params.id, selectProject]);

  if (selectedProject._id) {
    return (
      <div className="project-page">
        {priorities.map(
          priority =>
            priority !== "Unassigned" && (
              <TaskColumn
                key={priority}
                onCreatedPage={onCreatedPage}
                priority={priority}
                tasks={selectedProject.tasks[priority.split(" ")[0]]}
              />
            )
        )}
        {onUnassignedPage !== undefined && (
          <TaskColumn
            key={"Unassigned"}
            onCreatedPage={onCreatedPage}
            priority="Unassigned"
            tasks={selectedProject.tasks.Unassigned}
          />
        )}

        <CreateTaskButton projectId={match.params.id} />
      </div>
    );
  } else {
    return (
      <div className="project-page">
        <LoadingAnimation />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  selectedProject: state.selectedProject
});

const wrappedComponent = connect(mapStateToProps, { selectProject })(
  ProjectPage
);

export default withRouter(wrappedComponent);
