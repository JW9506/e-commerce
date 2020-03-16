import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";

import userReducer, { UserReducerState } from "./user/reducer";
import cartReducer, { CartState } from "./cart/reducer";

export interface RootState {
  user: UserReducerState;
  cart: CartState;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  combineReducers({
    user: userReducer,
    cart: cartReducer
  }),
  composeEnhancers(applyMiddleware(logger))
);
