import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TaskColumn from "./TaskColumn/TaskColumn";
import { selectProject, setFilter } from "../../store/state/selectedProject";
import CreateTaskButton from "./CreateTaskButton/CreateTaskButton";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { withRouter } from "react-router";
import { isUserAdmin } from "../../utils/isUserAdmin";
import { priorities } from "../../utils/priorities";

import "./css/project-page.css";

const ProjectPage = ({
  selectProject,
  onCreatedPage,
  unassignedFilter,
  selectedProject,
  match,
  setFilter,
  userId
}) => {
  const [unassignedTasksNo, setUnassignedTasksNo] = useState(0);

  useEffect(() => {
    setFilter("unassigned", false);
    setFilter("created", false);
    if (selectedProject._id !== match.params.id) {
      selectProject(match.params.id);
    }
  }, [match.params.id, selectProject, selectedProject._id, setFilter]);

  useEffect(() => {
    if (selectedProject.tasks) {
      setUnassignedTasksNo(selectedProject.tasks.Unassigned.length);
      if (
        selectedProject.tasks.Unassigned.length > 0 &&
        isUserAdmin(userId, selectedProject.projectMembers)
      ) {
        setFilter("unassigned", true);
      } else {
        setFilter("unassigned", false);
      }
    }
  }, [
    unassignedTasksNo,
    setFilter,
    selectedProject.tasks,
    selectedProject.projectMembers,
    userId
  ]);

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
  unassignedFilter: state.selectedProject.filter.unassigned,
  userId: state.userDetails._id
});

const wrappedComponent = connect(mapStateToProps, { selectProject, setFilter })(
  ProjectPage
);

export default withRouter(wrappedComponent);
