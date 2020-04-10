import React, { useEffect } from "react";
import { connect } from "react-redux";
import SimpleBarReact from "simplebar-react";
import ExtendingButton from "../ProjectsPage/ExtendingButton/ExtendingButton";
import MemberCard from "./MemberCard/MemberCard";
import { getUsers } from "../../store/state/users";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { isUserAdmin } from "../../utils/isUserAdmin";

import "./css/members-page.css";

const MembersPage = ({ project, getUsers, users, usersLoading, userId }) => {
  useEffect(() => {
    getUsers(project._id);
  }, [getUsers, project]);

  const sortUsers = users => {
    let adminNo = 0;
    let me = null;

    for (let i = 0; i < users.length; i++) {
      //find current user

      if (users[i]._id === userId) {
        me = users[i];
        users.splice(i, 1);
        i--;
      }
      //move all admins to start
      else if (isUserAdmin(users[i]._id, project.projectMembers)) {
        let userToMove = users[i];
        users.splice(i, 1);
        users.unshift(userToMove);
        adminNo++;
      }
    }

    //place current user
    if (me) {
      isUserAdmin(me._id, project.projectMembers)
        ? users.unshift(me)
        : users.splice(adminNo, 0, me);
    }

    return users;
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
        <SimpleBarReact>
          <div className="members-container">
            {sortUsers(users).map(user => (
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
