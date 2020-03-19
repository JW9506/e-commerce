import { CartAction } from "./action";
import { addItemToCart, removeItemFromCart } from "./utils";
import { DeepReadonly } from "utility-types";
import { Item } from "../shop/reducer";


export type CartItem = {
  quantity: number;
} & Item;

export type CartState = DeepReadonly<{
  hidden: boolean;
  cartItems: CartItem[];
}>;
const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

export default (state = INITIAL_STATE, action: CartAction): CartState => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};
