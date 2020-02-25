import axios from "axios";
import { loadUserDetails } from "../userDetails";

export const LOGIN_GUEST = "LOGIN_GUEST";

export const loginGuest = guest => dispatch => {
  axios.post("api/guests", guest).then(res => {
    let userDetails = {
      isSignedIn: true,
      guestName: res.data.guest_name,
      guestId: res.data._id
    };

    dispatch(loadUserDetails(userDetails));

    dispatch({
      type: LOGIN_GUEST,
      payload: guest
    });
  });
};
