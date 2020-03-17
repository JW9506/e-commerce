import { RootState } from "$redux";
import { createSelector } from "reselect";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(selectShop, shop => shop.collections);
