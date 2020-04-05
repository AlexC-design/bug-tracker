import React, { useEffect } from "react";
import { connect } from "react-redux";
import SimpleBarReact from "simplebar-react";

import MemberCard from "./MemberCard/MemberCard";
import { getUsers } from "../../store/state/users";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./css/members-page.css";

const MembersPage = ({ userList, usersLoading, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

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
            {userList.map(user => (
              <MemberCard
                name={user.userName}
                date={user.registerDate}
                id={user._id}
                key={user._id}
              />
            ))}
          </div>
        </SimpleBarReact>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  userList: state.users.users,
  usersLoading: state.users.loading
});

export default connect(mapStateToProps, { getUsers })(MembersPage);
