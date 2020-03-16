type ACTION_TYPE = "SET_CURRENT_USER";
export type User = {
  id: string;
  createdAt: string;
  email: string;
  displayName: string;
} | null;
export interface UserReducerAction<T> {
  type: ACTION_TYPE;
  payload: T;
}
export const setCurrentUserAction = <T extends User>(user: T): UserReducerAction<T> => ({
  type: "SET_CURRENT_USER",
  payload: user
});
