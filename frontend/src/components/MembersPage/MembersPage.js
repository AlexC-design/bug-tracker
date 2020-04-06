import React, { useEffect } from "react";
import { connect } from "react-redux";
import SimpleBarReact from "simplebar-react";
import ExtendingButton from "../ProjectsPage/ExtendingButton/ExtendingButton";
import MemberCard from "./MemberCard/MemberCard";
import { getUsers } from "../../store/state/users";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./css/members-page.css";

const MembersPage = ({ project, getUsers, users, usersLoading }) => {
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
                key={user._id}
              />
            ))}
          </div>
        </SimpleBarReact>
        <ExtendingButton buttonType="addUser" />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  project: state.selectedProject,
  users: state.users.users,
  usersLoading: state.users.loading
});

export default connect(mapStateToProps, { getUsers })(MembersPage);
