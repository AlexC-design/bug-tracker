import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProjects, deleteProject } from "../../store/state/projects/";
import ProjectCard from "./ProjectCard/ProjectCard";
import ExtendingButton from "./ExtendingButton/ExtendingButton";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import SimpleBarReact from "simplebar-react";
import { clearSelectedProject } from "../../store/state/selectedProject/index";
import { Popup } from "../Popup/Popup";
import { deleteProjectOff } from "../../store/state/notifications/index";

import "simplebar/src/simplebar.css";
import "./css/projects-page.css";

const ProjectsPage = ({
  getProjects,
  projects,
  userId,
  clearSelectedProject,
  deleteProjectNotification,
  deleteProjectOff,
  deleteProject
}) => {
  useEffect(() => {
    getProjects(userId);
    clearSelectedProject();
  }, [getProjects, userId, clearSelectedProject]);

  const onDeleteProject = () => {
    deleteProject(deleteProjectNotification.projectId);
    deleteProjectOff();
  };

  if (!projects.loading) {
    return (
      <div className="projects-page">
        {deleteProjectNotification && deleteProjectNotification.projectName && (
          <Popup
            buttons={[
              { text: "Cancel", action: deleteProjectOff },
              { text: "Delete", action: onDeleteProject }
            ]}
            text={[
              "Are you sure you want to permanently delete ",
              <b>"{deleteProjectNotification.projectName}" ?</b>
            ]}
          />
        )}
        <SimpleBarReact autoHide={false}>
          <div className="projects-container">
            {projects.projects.map(project => (
              <ProjectCard project={project} key={project._id} />
            ))}
          </div>
        </SimpleBarReact>
        <ExtendingButton buttonType="createProject" />
      </div>
    );
  } else {
    return (
      <div className="projects-page">
        <LoadingAnimation />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  projects: state.projects,
  userId: state.userDetails._id,
  deleteProjectNotification: state.notifications.deleteProject
});

export default connect(mapStateToProps, {
  getProjects,
  clearSelectedProject,
  deleteProjectOff,
  deleteProject
})(ProjectsPage);
