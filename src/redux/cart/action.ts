import { Item } from "./reducer";

const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART";

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

export type CartAction =
  | ToggleCartAction
  | AddItemCartAction<Item>
  | ClearItemFromCartAction<Item>
  | RemoveItemCartAction<Item>;

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
