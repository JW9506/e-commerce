import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { fetchCollectionsStart } from "./shop/sagas";

import userReducer, { UserReducerState } from "./user/reducer";
import cartReducer, { CartState } from "./cart/reducer";
import directoryReducer, { DirectoryState } from "./directory/reducer";
import shopReducer, { ShopState } from "./shop/reducer";
import { isProduction } from "Config";

export type RootState = {
  user: UserReducerState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

const persistConnfig: PersistConfig<RootState> = {
  key: "root",
  storage: localStorage,
  whitelist: ["cart"]
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (!isProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middlewares = [!isProduction && logger, sagaMiddleware].filter(
  (Boolean as any) as <T>(x: T | false) => x is T
);

export const store = createStore(
  persistReducer(persistConnfig, rootReducer),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
