import { eventChannel } from "redux-saga";
import { all, takeLeading, put, call, take } from "redux-saga/effects";
import { ACTIONS, loadUserDetails } from "./index";
import { performClientInit } from "../../../components/LoginPage/GoogleAuth/performClientInit";
import axios from "../../../axios";

const { SIGN_IN, GET_USER_DETAILS } = ACTIONS;

//

export function* signIn() {
  console.log("1");
  const auth = window.gapi.auth2.getAuthInstance();

  const authChannel = yield call(onAuthChange, auth);
  console.log("2");

  auth.signIn().then(
    user => {
      console.log(user);
    },
    err => {
      // performClientInit();
    }
  );
  console.log("3");
  yield take(authChannel);
  console.log("4");

  yield call(getUserDetails, auth);
  console.log("5");
}

function onAuthChange(auth) {
  return eventChannel(emitter => {
    auth.isSignedIn.listen(value => emitter(value));
    // The subscriber must return an unsubscribe function
    return () => ({});
  });
}

//

export function* getUserDetails() {
  const auth = window.gapi.auth2.getAuthInstance();
  const basicProfile = auth.currentUser.get().getBasicProfile();

  const userDetails = {
    isSignedIn: auth.currentUser.get().isSignedIn(),
    googleId: auth.currentUser.get().getId(),
    userEmail: basicProfile.getEmail(),
    userName: basicProfile.getName(),
    userGivenName: basicProfile.getGivenName()
  };

  const res = yield call(performUserRegistration, {
    userName: userDetails.userName,
    email: userDetails.userEmail,
    googleId: userDetails.googleId
  });

  yield put(loadUserDetails({ ...res.data, isSignedIn: true }));
}

//

function* watchSignIn() {
  yield takeLeading(SIGN_IN, signIn);
}

function* watchGetUserDetails() {
  yield takeLeading(GET_USER_DETAILS, getUserDetails);
}

export default function* rootSaga() {
  yield all([watchGetUserDetails(), watchSignIn()]);
}

//

const performUserRegistration = async newUser =>
  await axios.post("api/users", newUser);
