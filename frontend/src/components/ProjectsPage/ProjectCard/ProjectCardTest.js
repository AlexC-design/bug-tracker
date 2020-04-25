import React, { Component } from "react";
import axios from "../../../axios";
import { withRouter } from "react-router";
import ProjectBar from "./ProjectBar/ProjectBar";
import { ThumbnailPreview } from "./ThumbnailPreview/ThumbnailPreview";

import "./css/project-card.css";

class ProjectCardTest extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  getUsers = async () => {
    let res = await axios.get(`/api/users/project${this.props.project._id}`);
    this.setState({ users: res.data });
    console.log(this.state);
  };

  componentDidMount() {
    this.getUsers();
  }

  handleClick = () => {
    this.props.history.push(`/project/${this.props.project._id}`);
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="project-card project-card--test"
      >
        <div className="project-card--test__users">
          {this.state.users.map(user =>
            user.userName !== "Alexandru Ciobotaru" ? (
              <div>
                <div className="project-card--test__users__name">
                  {user.userName}
                </div>
                {user.email !== "none" && (
                  <div className="project-card--test__users__email">
                    {user.email}
                  </div>
                )}
              </div>
            ) : (
              <div className="test">me</div>
            )
          )}
        </div>
        <ThumbnailPreview
          taskColumns={Object.values(this.props.project.tasks)}
          test={true}
        />

        <ProjectBar project={this.props.project} />
      </div>
    );
  }
}

export default withRouter(ProjectCardTest);
