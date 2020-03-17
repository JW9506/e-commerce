import { CartAction } from "./action";
import { addItemToCart } from "./utils";
import { DeepReadonly } from "utility-types";

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
    default:
      return state;
  }
};