type ACTION_TYPES = "TOGGLE_CART_HIDDEN";
export interface CartAction {
  type: ACTION_TYPES;
}

export const toggleCartHidden = (): CartAction => ({
  type: "TOGGLE_CART_HIDDEN"
});
