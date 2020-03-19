import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "$firebase/utils";
import firebase from "firebase/app";
import { User } from "./reducer";
import {
  GOOGLE_SIGN_IN_START,
  signInSuccess,
  signInFailure,
  EMAIL_SIGN_IN_START,
  EmailSignInStartAction,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  signOutSuccess,
  signOutFailure
} from "./action";

export function* getSnapshotFromUserAuth(user: firebase.User) {
  try {
    const userRef: firebase.firestore.DocumentReference = yield call(
      createUserProfileDocument,
      user
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      } as User)
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInWithGoogle() {
  try {
    const { user }: firebase.auth.UserCredential = yield auth.signInWithPopup(
      googleProvider
    );
    if (user) yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({
  payload: { email, password }
}: EmailSignInStartAction) {
  try {
    const {
      user
    }: firebase.auth.UserCredential = yield auth.signInWithEmailAndPassword(
      email,
      password
    );
    if (user) yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth: firebase.User | null = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart)
  ]);
}
