import React, { useEffect } from "react";
import { connect } from "react-redux";
import SimpleBarReact from "simplebar-react";
import ExtendingButton from "../ProjectsPage/ExtendingButton/ExtendingButton";
import MemberCard from "./MemberCard/MemberCard";
import { getUsers } from "../../store/state/users";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { isUserAdmin } from "../../utils/isUserAdmin";
import { sortUsers } from "./sortUsers";
import { emailNotFoundOff } from "../../store/state/notifications/index";

import "./css/members-page.css";
import { Popup } from "../Popup/Popup";

const MembersPage = ({
  project,
  getUsers,
  users,
  usersLoading,
  userId,
  emailNotFound,
  emailNotFoundOff
}) => {
  useEffect(() => {
    project.projectMembers.length !== users.length && getUsers(project._id);
  }, [getUsers, project, users.length, project._id]);

  const hidePopup = () => {
    emailNotFoundOff();
  };

  if (usersLoading === true) {
    return (
      <div className="members-page">
        <LoadingAnimation />
      </div>
    );
  } else {
    return (
      <div className="members-page">
        {emailNotFound !== null && (
          <Popup
            buttons={[{ text: "OK", action: hidePopup }]}
            text={[
              "No registered user found with email ",
              <b>"{emailNotFound}"</b>
            ]}
          />
        )}
        <SimpleBarReact>
          <div className="members-container">
            {sortUsers(users, userId, project).map(user => (
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
  userId: state.userDetails._id,
  emailNotFound: state.notifications.emailNotFound
});

export default connect(mapStateToProps, { getUsers, emailNotFoundOff })(
  MembersPage
);
