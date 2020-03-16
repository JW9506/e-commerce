import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import logger from "redux-logger";

import userReducer, { UserReducerState } from "./user/reducer";
import cartReducer, { CartState } from "./cart/reducer";
import { isProduction } from "Config";

export interface RootState {
  user: UserReducerState;
  cart: CartState;
}

const composeEnhancers =
  (!isProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middlewares = [!isProduction && logger].filter(Boolean as any as <T>(x: T | false) => x is T);
export default createStore(
  combineReducers({
    user: userReducer,
    cart: cartReducer
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);
