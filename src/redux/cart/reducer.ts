import { CartAction } from "./action";
import { addItemToCart, removeItemFromCart } from "./utils";

export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export type CartItem = Readonly<
  {
    quantity: number;
  } & Item
>;

export type CartState = {
  hidden: boolean;
  cartItems: CartItem[];
};
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
    default:
      return state;
  }
};
