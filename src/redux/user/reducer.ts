import { UserAction } from "./action";
import { DeepReadonly } from "utility-types";
export type User = {
  id: string;
  createdAt: string;
  email: string;
  displayName: string;
} | null;
export type UserReducerState = DeepReadonly<{
  currentUser: User;
  error: Error | null;
}>;

const INITIAL_STATE: UserReducerState = {
  currentUser: null,
  error: null
};

export default (
  state = INITIAL_STATE,
  action: UserAction
): UserReducerState => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case "SIGN_OUT_SUCCESS":
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case "SIGN_OUT_FAILURE":
    case "SIGN_IN_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
