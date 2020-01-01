import { eventChannel } from 'redux-saga'
import { all, takeLeading, put, call, take } from "redux-saga/effects";
import { ACTIONS, fetchAuthSuccess, authInitSuccess } from "./index";

const { FETCH_AUTH, AUTH_INIT_SUCCESS } = ACTIONS;

function onAuthChange(auth) {
  return eventChannel(emitter => {
      auth.isSignedIn.listen(value => emitter(value));
      // The subscriber must return an unsubscribe function
      return () => ({})
    }
  )
}

const performAuthInit = async () => {
  return new Promise(resolve => {
    return window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId:
          "29791915032-i3nlh62ukf6f5bp1aom5ko8iaq1be011.apps.googleusercontent.com",
        scope: "email profile"
      });
      resolve();
    });
  });
};

const performFetchAuth = async () => {
  const auth = window.gapi.auth2.getAuthInstance();

  return auth;
};

export function* fetchAuth() {
  if (window.gapi.client) {
    yield put(authInitSuccess());
  } else {
    yield call(performAuthInit);
    yield put(authInitSuccess());
  }
}

export function* authIsLoggedIn(auth) {
  const basicProfile = auth.currentUser.get().getBasicProfile();

  const userDetails = {
    isSignedIn: auth.currentUser.get().isSignedIn(),
    userId: auth.currentUser.get().getId(),
    userEmail: basicProfile.getEmail(),
    userName: basicProfile.getName(),
    userFamilyName: basicProfile.getFamilyName(),
    userGivenName: basicProfile.getGivenName()
  };

  yield put(fetchAuthSuccess(userDetails));
}

export function* authInitSuccessSaga() {
  const auth = yield call(performFetchAuth);
  let loggedIn = auth.isSignedIn.get();

  if (loggedIn) {
    yield call(authIsLoggedIn, auth);
  } else {
    const authChannel = yield call(onAuthChange, auth);
    auth.signIn();
    loggedIn = yield take(authChannel)
    if (loggedIn) {
      yield call(authIsLoggedIn, auth);
    }
  }
}

function* watchFetchAuth() {
  yield takeLeading(FETCH_AUTH, fetchAuth);
}

function* watchAuthInitSuccess() {
  yield takeLeading(AUTH_INIT_SUCCESS, authInitSuccessSaga);
}

export default function* rootSaga() {
  yield all([watchFetchAuth(), watchAuthInitSuccess()]);
}
