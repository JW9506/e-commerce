import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";
import userReducer from "./user/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { UserReducerState } from "./user/reducer";
export interface RootState {
  user: UserReducerState
}
export default createStore(
  combineReducers({
    user: userReducer
  }),
  composeEnhancers(applyMiddleware(logger))
);
