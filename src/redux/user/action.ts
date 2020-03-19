import { User } from "./reducer";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START";
export const CHECK_USER_SESSION = "CHECK_USER_SESSION";
export const SIGN_OUT_START = "SIGN_OUT_START";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE";

interface EmailAndPassword {
  email: string;
  password: string;
}

export interface GoogleSignInStartAction {
  type: typeof GOOGLE_SIGN_IN_START;
}

export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: User;
}

export interface SignInErrorAction {
  type: typeof SIGN_IN_FAILURE;
  payload: Error;
}

export interface EmailSignInStartAction {
  type: typeof EMAIL_SIGN_IN_START;
  payload: EmailAndPassword;
}

export interface CheckUserSessionAction {
  type: typeof CHECK_USER_SESSION;
}

export interface SignOutStartAction {
  type: typeof SIGN_OUT_START;
}

export interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}

export interface SignOutFailureAction {
  type: typeof SIGN_OUT_FAILURE;
  payload: Error;
}

export type UserAction =
  | GoogleSignInStartAction
  | SignInSuccessAction
  | SignInErrorAction
  | EmailSignInStartAction
  | CheckUserSessionAction
  | SignOutSuccessAction
  | SignOutFailureAction
  | SignOutStartAction;

export const googleSignInStart = (): UserAction => ({
  type: "GOOGLE_SIGN_IN_START"
});

export const signInSuccess = (user: User): UserAction => ({
  type: "SIGN_IN_SUCCESS",
  payload: user
});

export const signInFailure = (error: Error): UserAction => ({
  type: "SIGN_IN_FAILURE",
  payload: error
});

export const emailSignInStart = (
  emailAndPassword: EmailAndPassword
): UserAction => ({
  type: "EMAIL_SIGN_IN_START",
  payload: emailAndPassword
});

export const checkUserSession = (): UserAction => ({
  type: "CHECK_USER_SESSION"
});

export const signOutStart = (): UserAction => ({
  type: "SIGN_OUT_START"
});

export const signOutSuccess = (): UserAction => ({
  type: "SIGN_OUT_SUCCESS"
});

export const signOutFailure = (error: Error): UserAction => ({
  type: "SIGN_OUT_FAILURE",
  payload: error
});
