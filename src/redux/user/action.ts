import { User } from "./reducer";
type ACTION_TYPE = "SET_CURRENT_USER";
export interface UserReducerAction<T> {
  type: ACTION_TYPE;
  payload: T;
}
export const setCurrentUserAction = <T extends User>(user: T): UserReducerAction<T> => ({
  type: "SET_CURRENT_USER",
  payload: user
});
