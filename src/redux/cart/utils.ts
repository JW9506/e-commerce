import { CartItem } from "./reducer";
import { DeepReadonly } from "utility-types";
import { Item } from "./reducer";

export const addItemToCart = (
  cartItems: DeepReadonly<CartItem[]>,
  cartItemToAdd: Item
): CartItem[] => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
