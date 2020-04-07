import React from "react";
import memberIcon from "../../../assets/svg/member-icon.svg";
import { DeleteButton } from "../../DeleteButton/DeleteButton";
import { dateFormatting } from "./dateFormatting";
import { removeUserFromProject } from "../../../store/state/selectedProject/index";

import "./css/member-card.css";
import { connect } from "react-redux";

const MemberCard = ({ name, date, id, projectId, removeUserFromProject }) => {
  const formattedDate = dateFormatting(date);

  return (
    <div className="member-card">
      <img className="member-card__icon" src={memberIcon} alt="user" />
      <div className="member-card__details">
        <div className="member-card__details__name">{name}</div>
        <div className="member-card__details__date">
          Joined: {formattedDate}
        </div>
      </div>
      <DeleteButton clickEvent={() => removeUserFromProject(id, projectId)} />
    </div>
  );
};

export default connect(null, { removeUserFromProject })(MemberCard);
