import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import logger from "redux-logger";

import userReducer, { UserReducerState } from "./user/reducer";
import cartReducer, { CartState } from "./cart/reducer";
import directoryReducer, { DirectoryState } from "./directory/reducer";
import shopReducer, { ShopState } from "./shop/reducer";
import { isProduction } from "Config";
import { DeepReadonly } from "utility-types";

type PersistState = {
  user: UserReducerState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
};
export type RootState = DeepReadonly<PersistState>;
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

const persistConnfig: PersistConfig<PersistState> = {
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
