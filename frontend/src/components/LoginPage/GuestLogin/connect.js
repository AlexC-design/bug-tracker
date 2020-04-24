import { connect } from "react-redux";
import {
  loadUserDetails,
  userDetailsLoading
} from "../../../store/state/userDetails";

import GuestLogin from "./GuestLogin";

const mapStateToProps = state => {
  return { userDetails: state.userDetails };
};

const mapDispatchToProps = dispatch => ({
  userDetailsLoading: () => dispatch(userDetailsLoading()),
  loadUserDetails: payload => dispatch(loadUserDetails(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestLogin);
