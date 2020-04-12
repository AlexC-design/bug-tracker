import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProjects } from "../../store/state/projects/";
import ProjectCard from "./ProjectCard/ProjectCard";
import ExtendingButton from "./ExtendingButton/ExtendingButton";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import SimpleBarReact from "simplebar-react";
import { clearTasks } from "../../store/state/selectedProject/index";

import "simplebar/src/simplebar.css";
import "./css/projects-page.css";

const ProjectsPage = ({ getProjects, projects, userId, clearTasks }) => {
  useEffect(() => {
    getProjects(userId);
    clearTasks();
  }, [getProjects, userId, clearTasks]);

  if (!projects.loading) {
    return (
      <div className="projects-page">
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
  userId: state.userDetails._id
});

export default connect(mapStateToProps, { getProjects, clearTasks })(
  ProjectsPage
);
