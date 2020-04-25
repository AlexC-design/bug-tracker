import React, { useEffect, useState } from "react";
import axios from "../../axios";
import SimpleBarReact from "simplebar-react";
import MemberCard from "../MembersPage/MemberCard/MemberCard";

import "../MembersPage/css/members-page.css";

const MembersPage = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const res = await axios.get("api/users");
    setUsers(res.data);
    console.log(users);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="members-page">
      <SimpleBarReact>
        <div className="members-container">
          {users.map(user =>
            user.userName.includes("Guest") ? (
              <div>{user.userName}</div>
            ) : (
              <MemberCard
                name={user.userName}
                date={user.registerDate}
                email={user.email}
                id={user._id}
                projectId={"none"}
                projectMembers={[]}
                key={user._id}
              />
            )
          )}
        </div>
      </SimpleBarReact>
    </div>
  );
};

export default MembersPage;
