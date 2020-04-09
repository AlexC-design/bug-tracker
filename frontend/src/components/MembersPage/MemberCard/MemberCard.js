import React from "react";
import { connect } from "react-redux";
import memberIcon from "../../../assets/svg/member-icon.svg";
import { DeleteButton } from "../../DeleteButton/DeleteButton";
import { dateFormatting } from "./dateFormatting";
import { removeUserFromProject } from "../../../store/state/selectedProject/index";
import { isUserAdmin } from "../../../utils/isUserAdmin";
import adminIcon from "../../../assets/svg/admin-icon.svg";

import "./css/member-card.css";

const MemberCard = ({
  name,
  date,
  id,
  userId,
  projectId,
  removeUserFromProject,
  projectMembers
}) => {
  const formattedDate = dateFormatting(date);

  return (
    <div className={`member-card member-card${id === userId ? "--user" : ""}`}>
      <div className="member-card__icon">
        {isUserAdmin(id, projectMembers) && (
          <img
            className="member-card__icon__admin"
            src={adminIcon}
            alt="admin"
          />
        )}{" "}
        <img src={memberIcon} alt="user" />
      </div>
      <div className="member-card__details">
        <div className="member-card__details__name">{name}</div>
        <div className="member-card__details__date">
          Joined: {formattedDate}
        </div>
      </div>
      {isUserAdmin(userId, projectMembers) &&
        !isUserAdmin(id, projectMembers) && (
          <DeleteButton
            clickEvent={() => removeUserFromProject(id, projectId)}
          />
        )}
    </div>
  );
};

const mapStateToProps = state => ({
  userId: state.userDetails._id
});

export default connect(mapStateToProps, { removeUserFromProject })(MemberCard);
