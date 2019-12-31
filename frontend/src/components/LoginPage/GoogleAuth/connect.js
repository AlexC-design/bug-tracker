import { connect } from "react-redux";
import { fetchAuth } from "../../../store/state/userDetails";

import GoogleAuth from "./GoogleAuth";

const mapDispatchToProps = dispatch => ({
  fetchAuth: () => dispatch(fetchAuth())
});

export default connect(null, mapDispatchToProps)(GoogleAuth);
