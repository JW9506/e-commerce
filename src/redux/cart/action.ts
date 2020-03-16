import { CartItem } from "./reducer";

const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
const ADD_ITEM = "ADD_ITEM";

interface ToggleCartAction {
  type: typeof TOGGLE_CART_HIDDEN;
}
interface AddItemCartAction<T> {
  type: typeof ADD_ITEM;
  payload: T;
}

export type CartAction = ToggleCartAction | AddItemCartAction<CartItem>;

export const toggleCartHidden = (): CartAction => ({
  type: "TOGGLE_CART_HIDDEN"
});

export const addItem = (cartItem: CartItem): CartAction => ({
  type: "ADD_ITEM",
  payload: cartItem
});
