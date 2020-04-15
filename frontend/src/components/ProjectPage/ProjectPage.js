import React, { useEffect } from "react";
import { connect } from "react-redux";
import TaskColumn from "./TaskColumn/TaskColumn";
import { selectProject, setFilter } from "../../store/state/selectedProject";
import CreateTaskButton from "./CreateTaskButton/CreateTaskButton";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { withRouter } from "react-router";
import { priorities } from "../../utils/priorities";

import "./css/project-page.css";

const ProjectPage = ({
  selectProject,
  onCreatedPage,
  unassignedFilter,
  selectedProject,
  match,
  setFilter
}) => {
  useEffect(() => {
    selectProject(match.params.id);
  }, [match.params.id, selectProject]);

  useEffect(() => {
    if (selectedProject.tasks.Unassigned.length > 0) {
      setFilter("unassigned", true);
    }
  }, [selectedProject.tasks.Unassigned.length]);

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
        {unassignedFilter && (
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
  selectedProject: state.selectedProject,
  unassignedFilter: state.selectedProject.filter.unassigned
});

const wrappedComponent = connect(mapStateToProps, { selectProject, setFilter })(
  ProjectPage
);

export default withRouter(wrappedComponent);
