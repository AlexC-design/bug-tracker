import { connect } from "react-redux";
import { createGuest } from "../../../store/state/guests";

import GuestLogin from "./GuestLogin";

const mapStateToProps = state => {
  return { userDetails: state.userDetails };
};

export default connect(mapStateToProps, { createGuest })(GuestLogin);
