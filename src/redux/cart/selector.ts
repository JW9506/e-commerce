// Todo: Purpose unclear, can't see fundamental performance difference
import { createSelector } from "reselect";
import { RootState } from "$redux";
import { DeepReadonly } from "utility-types";
import { CartItem } from "$redux/cart/reducer";

const selectCart = (state: RootState) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
export type selectCartItemsShape = DeepReadonly<CartItem[]>;

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((cnt, item) => cnt + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
