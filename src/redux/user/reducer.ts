import { User, UserReducerAction } from "./action";
import { DeepReadonly } from "utility-types";
export type UserReducerState = DeepReadonly<{
  currentUser: User;
}>;

const INITIAL_STATE: UserReducerState = {
  currentUser: null
};

export default (
  state = INITIAL_STATE,
  action: UserReducerAction<User>
): UserReducerState => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
