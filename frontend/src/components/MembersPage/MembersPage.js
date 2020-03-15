import React, { useEffect } from "react";
import { connect } from "react-redux";
import SimpleBarReact from "simplebar-react";

import MemberCard from "./MemberCard/MemberCard";
import { getGuests } from "../../store/state/guests";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./css/members-page.css";

const MembersPage = ({ guestList, guestsLoading, getGuests }) => {
  useEffect(() => {
    getGuests();
  }, [getGuests]);

  if (guestsLoading === true) {
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
            {guestList.map(guest => (
              <MemberCard
                name={guest.guestName}
                date={guest.registerDate}
                id={guest._id}
              />
            ))}
          </div>
        </SimpleBarReact>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  guestList: state.guests.guests,
  guestsLoading: state.guests.loading
});

export default connect(mapStateToProps, { getGuests })(MembersPage);
