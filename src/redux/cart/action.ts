import { Item } from "./reducer";

const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
const ADD_ITEM = "ADD_ITEM";

interface ToggleCartAction {
  type: typeof TOGGLE_CART_HIDDEN;
}
interface AddItemCartAction<T> {
  type: typeof ADD_ITEM;
  payload: T;
}

export type CartAction = ToggleCartAction | AddItemCartAction<Item>;

export const toggleCartHidden = (): CartAction => ({
  type: "TOGGLE_CART_HIDDEN"
});

export const addItem = (cartItem: Item): CartAction => ({
  type: "ADD_ITEM",
  payload: cartItem
});
