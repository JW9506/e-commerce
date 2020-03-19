import { Item } from "../shop/reducer";

export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

interface ToggleCartAction {
  type: typeof TOGGLE_CART_HIDDEN;
}
interface AddItemCartAction<T> {
  type: typeof ADD_ITEM;
  payload: T;
}
interface RemoveItemCartAction<T> {
  type: typeof REMOVE_ITEM;
  payload: T;
}
interface ClearItemFromCartAction<T> {
  type: typeof CLEAR_ITEM_FROM_CART;
  payload: T;
}
interface ClearCartAction {
  type: typeof CLEAR_CART;
}

export type CartAction =
  | ToggleCartAction
  | AddItemCartAction<Item>
  | ClearItemFromCartAction<Item>
  | RemoveItemCartAction<Item>
  | ClearCartAction;

export const toggleCartHidden = (): CartAction => ({
  type: "TOGGLE_CART_HIDDEN"
});

export const addItem = (cartItem: Item): CartAction => ({
  type: "ADD_ITEM",
  payload: cartItem
});

export const removeItem = (cartItem: Item): CartAction => ({
  type: "REMOVE_ITEM",
  payload: cartItem
});

export const clearItemFromCart = (cartItem: Item): CartAction => ({
  type: "CLEAR_ITEM_FROM_CART",
  payload: cartItem
});

export const clearCart = (): CartAction => ({
  type: "CLEAR_CART"
});
