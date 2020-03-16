import { CartAction } from "./action";
export type CartState = Readonly<{
  hidden: boolean;
}>;
const INITIAL_STATE: CartState = {
  hidden: true
};

export default (state = INITIAL_STATE, action: CartAction): CartState => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
