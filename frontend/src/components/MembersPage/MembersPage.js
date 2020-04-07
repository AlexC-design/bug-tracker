import React, { useEffect } from "react";
import { connect } from "react-redux";
import SimpleBarReact from "simplebar-react";
import ExtendingButton from "../ProjectsPage/ExtendingButton/ExtendingButton";
import MemberCard from "./MemberCard/MemberCard";
import { getUsers } from "../../store/state/users";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./css/members-page.css";
import { isUserAdmin } from "../../utils/isUserAdmin";

const MembersPage = ({ project, getUsers, users, usersLoading, userId }) => {
  useEffect(() => {
    getUsers(project._id);
  }, [getUsers, project]);

  if (usersLoading === true) {
    return (
      <div className="members-page">
        <LoadingAnimation />
      </div>
    );
  } else {
    return (
      <div className="members-page">
        <SimpleBarReact>
          <div className="members-container">
            {users.map(user => (
              <MemberCard
                name={user.userName}
                date={user.registerDate}
                id={user._id}
                projectId={project._id}
                projectMembers={project.projectMembers}
                key={user._id}
              />
            ))}
          </div>
        </SimpleBarReact>
        {isUserAdmin(userId, project.projectMembers) && (
          <ExtendingButton buttonType="addUser" />
        )}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  project: state.selectedProject,
  users: state.users.users,
  usersLoading: state.users.loading,
  userId: state.userDetails._id
});

export default connect(mapStateToProps, { getUsers })(MembersPage);
