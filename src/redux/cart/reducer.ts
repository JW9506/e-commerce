import { CartAction } from "./action";
import { DeepReadonly } from "utility-types";

export interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
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
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};
