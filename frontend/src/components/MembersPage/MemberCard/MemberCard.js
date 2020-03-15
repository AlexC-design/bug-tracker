import React from "react";
import memberIcon from "../../../assets/svg/member-icon.svg";
import { DeleteButton } from "../../DeleteButton/DeleteButton";
import { dateFormatting } from "./dateFormatting";
import { deleteGuest } from "../../../store/state/guests";

import "./css/member-card.css";
import { connect } from "react-redux";

const MemberCard = ({ name, date, id, deleteGuest }) => {
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
      <DeleteButton clickEvent={() => deleteGuest(id)} />
    </div>
  );
};

export default connect(null, { deleteGuest })(MemberCard);
