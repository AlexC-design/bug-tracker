import { clearUserDetails } from "./index";

export const signOut = () => dispatch => {
  const auth = window.gapi.auth2.getAuthInstance();
  auth.signOut();

  dispatch(clearUserDetails());
};
