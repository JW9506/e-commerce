import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import logger from "redux-logger";

import userReducer, { UserReducerState } from "./user/reducer";
import cartReducer, { CartState } from "./cart/reducer";
import { isProduction } from "Config";

export interface RootState {
  user: UserReducerState;
  cart: CartState;
}
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

const persistConnfig: PersistConfig<RootState> = {
  key: "root",
  storage: localStorage,
  whitelist: ["cart"]
};

const composeEnhancers =
  (!isProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middlewares = [!isProduction && logger].filter(
  (Boolean as any) as <T>(x: T | false) => x is T
);

export const store = createStore(
  persistReducer(persistConnfig, rootReducer),
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
