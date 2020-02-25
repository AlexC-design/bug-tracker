import { connect } from "react-redux";
import { loadUserDetails } from "../../../store/state/userDetails";

import GuestLogin from "./GuestLogin";

const mapStateToProps = state => {
  return { userDetails: state.userDetails };
};

export default connect(mapStateToProps, { loadUserDetails })(GuestLogin);
