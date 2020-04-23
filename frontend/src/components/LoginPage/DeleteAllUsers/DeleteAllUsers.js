import React from "react";
import axios from "../../../axios";

export const DeleteAllUsers = () => {
  const deleteUserAccounts = async () => {
    let ids = await axios
      .get("api/users")
      .then(res => res.data.map(user => user._id));

    if (ids.length) {
      ids.forEach(id => axios.delete(`api/users/${id}`));

      alert(`Deleted ${ids.length} users`);
    } else {
      alert("No user accounts in the DB");
    }
  };

  return (
    <div>
      <button onClick={deleteUserAccounts}>Delete all users</button>
    </div>
  );
};
