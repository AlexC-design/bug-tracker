import React from "react";
import axios from "axios";

export const DeleteAllProjects = () => {
  let excludedIds = ["5e9327ecb9e0a31b4c630800"];

  const deleteProjects = async () => {
    let projectIds = await axios
      .get("api/projects")
      .then(res => res.data.map(project => project._id));

    if (projectIds.length) {
      let deletedNo = 0;

      projectIds.forEach(id => {
        if (excludedIds.includes(id.toString())) {
          console.log(`%c excluding ${id}`, "color: #99ff99");
        } else {
          console.log(`%c deleting ${id}`, "color: #ff9999");
          axios.delete(`api/projects/${id}`);
          deletedNo++;
        }
      });

      console.log(
        `%c deleted ${deletedNo} projects `,
        "background: #ff0; color: #000"
      );
      alert(` deleted ${deletedNo} projects `);
    } else {
      alert("no projects to delete");
      return;
    }
  };

  return (
    <div>
      <button onClick={() => deleteProjects()}>Delete all projects</button>
    </div>
  );
};
